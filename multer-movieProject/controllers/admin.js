const movieModle = require("../models/movieModels");

module.exports.homePage = (req, res) => {
    return res.render('./admin/index');
}

module.exports.addMoviePage = (req, res) => {
    return res.render('./admin/form-basic');
}

module.exports.viewMoviePage = async (req, res) => {
    try {
        let movies = await movieModle.find({});
        return res.render('./admin/view', { movies });
    } catch (error) {
        console.log(error.message);
        return res.render('./admin/view', { movies: [] });
    }
}

module.exports.createMovie = async (req, res) => {
    try {
        req.body.image = req.file.path;
        await movieModle.create(req.body);
        console.log("Data Created.");
        return res.redirect(req.get('Referrer') || '/');
    } catch (error) {
        console.log(error.message);
        return res.redirect(req.get('Referrer') || '/');
    }
}