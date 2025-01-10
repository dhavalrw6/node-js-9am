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

module.exports.reviewPage = (req, res) => {
    return res.render('./client/review');
}

module.exports.singlePage = (req, res) => {
    return res.render('./client/single');
}