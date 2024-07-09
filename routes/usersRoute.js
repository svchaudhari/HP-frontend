const express = require("express");
router = express.Router();
usersRoute = require("../controllers/userController");
router.get("/",usersRoute.userController);
module.exports = router;