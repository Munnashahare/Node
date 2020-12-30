const express = require('express');
const router = express.Router();
const controller = require("../controllers/user.controller")

// getting user data
router.get("/users/:id", controller.getUsers)
// post method
router.post("/register", controller.postUser);
// updating data
router.put("/user/update/:id", controller.putUser);
// deleting users by using id
router.delete("/user/delete/:id", controller.deleteUser);

module.exports = router;