const { getAll, create, remove, updateUser, getUser } = require("../controllers/user.controllers");
const express = require('express');

const userRouter = express.Router();

userRouter.route("/")
    .get(getAll)
    .post(create)
userRouter.route("/:id")
    .get(getUser)
    .delete(remove)
    .put(updateUser)


module.exports= userRouter;