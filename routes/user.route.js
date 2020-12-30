const express = require('express');
const router = express.Router();
const {getUsers, postUser} = require("../controllers/user.controller")


router.get("/users/:id", getUsers)
// get as a post method
router.get("/addu/:id/:name/:email", postUser);

module.exports = router;