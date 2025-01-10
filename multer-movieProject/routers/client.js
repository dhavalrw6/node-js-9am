const { Router } = require("express");

const clientController = require('../controllers/client');

const clientRouter = Router();

clientRouter.get('/', clientController.homePage);
clientRouter.get('/about', clientController.aboutPage);
clientRouter.get('/contact', clientController.contactPage);
clientRouter.get('/joinus', clientController.joinusPage);
clientRouter.get('/review', clientController.reviewPage);
clientRouter.get('/single', clientController.singlePage);

module.exports = clientRouter;