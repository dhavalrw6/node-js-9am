const { Router } = require("express");
const adminController = require("../controllers/admin");
const imageUpload = require("../middlewares/imageUpload");

const adminRouter = Router();

adminRouter.get('/admin', adminController.homePage);
adminRouter.get('/movie/create', adminController.addMoviePage);
adminRouter.post('/movie/create', imageUpload, adminController.createMoviePage);

adminRouter.get('/movie/view', adminController.viewMoviePage);

module.exports = adminRouter;