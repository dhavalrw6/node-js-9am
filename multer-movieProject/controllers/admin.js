const movieModle = require("../models/movieModels");
const fs = require("fs");
const userModel = require("../models/userModel");
module.exports.homePage = (req, res) => {
  return res.render("./admin/index");
};

module.exports.addMoviePage = (req, res) => {
  return res.render("./admin/form-basic");
};

module.exports.viewMoviePage = async (req, res) => {
  try {
    let movies = await movieModle.find({});
    return res.render("./admin/view", { movies });
  } catch (error) {
    console.log(error.message);
    return res.render("./admin/view", { movies: [] });
  }
};

module.exports.createMovie = async (req, res) => {
  try {
    console.log(req.body);

    if (req.body.editId) {
      if (req.file) {
        req.body.image = req.file.path;
        fs.unlinkSync(req.body.oldImage);
      } else {
        req.body.image = req.body.oldImage;
      }
      await movieModle.findByIdAndUpdate(req.body.editId, req.body);
      return res.redirect("/movie/view");
    } else {
      req.body.image = req.file.path;
      await movieModle.create(req.body);
    }

    console.log("Data Created.");
    return res.redirect(req.get("Referrer") || "/");
  } catch (error) {
    console.log(error.message);
    return res.redirect(req.get("Referrer") || "/");
  }
};

module.exports.movieDelete = async (req, res) => {
  try {
    let { id } = req.params;
    let movie = await movieModle.findByIdAndDelete(id);
    if (movie) {
      fs.unlinkSync(movie.image);
    }
    console.log("Movie Deleted.");
    return res.redirect(req.get("Referrer") || "/");
  } catch (error) {
    console.log(error.message);
    return res.redirect(req.get("Referrer") || "/");
  }
};

module.exports.movieEditPage = async (req, res) => {
  try {
    let { id } = req.params;
    let movie = await movieModle.findById(id);
    return res.render("./admin/edit.ejs", { movie: movie });
  } catch (error) {
    console.log(error.message);
    let obj = {
      id: "",
      title: "",
      image: "",
      rating: "",
    };
    return res.render("/admin/edit", { movie: obj });
  }
};

module.exports.signupPage = (req, res) => {
  return res.render("./admin/signup.ejs");
};

module.exports.signup = async (req, res) => {
  try {
    let { password, confirm_password } = req.body;
    // console.log(req.body);

    if (password == confirm_password) {
      let user = await userModel.create(req.body);
      console.log("User Created");
      return res.redirect("/login");
      // return res.json({ messagge: "user created" });
    } else {
      console.log("Password and Confirm Password do not match");
      return res.redirect(req.get("Referrer") || "/");
    }
  } catch (error) {
    console.log(error.message);
    return res.redirect(req.get("Referrer") || "/");
  }
};

module.exports.loginPage = (req, res) => {
  return res.render("./admin/login");
};

module.exports.login = async (req, res) => {
  try {
    let { username, password } = req.body;

    let user = await userModel.findOne({ username: username });
    if (user) {
      if (user.password == password) {
        console.log("user login successfully.");
        res.cookie("token", user.id);
        return res.redirect("/admin");
      } else {
        console.log("password not match.");
        return res.redirect(req.get("Referrer") || "/");
      }
    } else {
      console.log("User not found.");
      return res.redirect("/signup");
    }
  } catch (error) {
    console.log(error.message);
    return res.redirect(req.get("Referrer") || "/");
  }
};
