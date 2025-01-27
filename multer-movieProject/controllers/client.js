const movieModle = require("../models/movieModels");

module.exports.homePage = (req, res) => {
    return res.render('./client/home');// render the home template
}

module.exports.aboutPage = (req, res) => {
    return res.render('./client/about');
}

module.exports.contactPage = (req, res) => {
    return res.render('./client/contact');
}

module.exports.joinusPage = (req, res) => {
    return res.render('./client/joinus');
}

module.exports.reviewPage = async(req, res) => {
    try {
        let movieList = await movieModle.find({});
        return res.render('./client/review',{movieList});
    } catch (error) {
        console.log(error.message);
        return res.render('./client/review',{movieList:[]});        
    }
}

module.exports.singlePage = async(req, res) => {
    try {
        let movie = await movieModle.findById(req.params.id);
        return res.render('./client/single',{movie});
    } catch (error) {
        console.log(error.message);
        return res.render('./client/single',{movie:{}});        
    }
}