const express = require("express");
const router = express.Router();
const { uploadFile } = require("../middlewares/upload");
const { getEvents, postEvents } = require("../controllers/eventcontroller");

//users
// const { getUsers, getSingleUser, editUser } = require("../controllers/user");

//route users
router.get("/events", getEvents);
// router.patch("/user", authenticated, editUser);

// login-register
router.post("/events", uploadFile("image"), postEvents);

module.exports = router;
