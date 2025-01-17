const { Router } = require("express");
const adminController = require("../controllers/admin");
const imageUpload = require("../middlewares/imageUpload");

const adminRouter = Router();

adminRouter.get('/admin', adminController.homePage);
adminRouter.get('/movie/create', adminController.addMoviePage);
adminRouter.post('/movie/create', imageUpload, adminController.createMovie);

adminRouter.get('/movie/view', adminController.viewMoviePage);

adminRouter.get('/movie/delete/:id', adminController.movieDelete);

adminRouter.get('/edit/:id', adminController.movieEditPage)

module.exports = adminRouter;