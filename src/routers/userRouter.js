const express = require("express");
const userRouter = express.Router();

const users = [
    { id: 1, name: "Traeq Mahmud" },
    { id: 2, name: "Rashed Alam" },
    { id: 3, name: "Nished Alam" },
];

userRouter.get('/', (req, res) => {
    res.status(200).send({
        message: "user name returned",
        users: users
    });
});
module.exports = userRouter;
