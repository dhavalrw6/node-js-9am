const { Router } = require("express");
const adminController = require("../controllers/admin")

const adminRouter = Router();

adminRouter.get('/',adminController.homePage);

module.exports = adminRouter;