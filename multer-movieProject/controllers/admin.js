module.exports.homePage = (req, res) => {
    return res.render('./admin/index');
}

module.exports.addMoviePage = (req, res) => {
    return res.render('./admin/form-basic');
}

module.exports.viewMoviePage = (req, res) => {
    return res.render('./admin/view');
}

module.exports.createMoviePage = (req, res) => {
    req.body.image = req.file.path;
    return res.json({ "body Data": req.body, "File Data": req.file });
}