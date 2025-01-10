const { Router } = require("express");
const clientRouter = require("./client");
const adminRouter = require("./admin");

const router = Router();

router.use('/', clientRouter);
router.use('/admin', adminRouter);

module.exports = router;

