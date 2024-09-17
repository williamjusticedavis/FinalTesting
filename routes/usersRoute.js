const router = require('express').Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { UserModel } = require('../models/userModel')

router.post("/register", async (req, res) => {
    try {
        const password = await bcrypt.hash(req.body.password, 10)
        const user = await UserModel.create({ ...req.body, password })
        user.password = "*******"
        res.send(user)
    } catch (error) {
        console.error(error);
        if (error.code == 11000) {
            res.status(409).json({
                message: "Email already exists!"
            })
            return;
        }
        res.status(500).json({
            message: "General error"
        })
    }
})

router.post("/login", async (req, res) => {
    try {
        const user = await UserModel.findOne({ email: req.body.email })
        if (!user) {
            const err = new Error("User not found!")
            err.code = 404
            throw err
        }

        const isMatch = bcrypt.compare(req.body.password, user.password)

        if (!isMatch) {
            const err = new Error("Wrong password!")
            err.code = 401
            throw err
        }

        const token = jwt.sign({ user }, process.env.JWT_SECRET)

        res.cookie("token", token,
            {
                httpOnly: true,
                expires: new Date(Date.now() + (1000 * 5))
            }
        ).json({ message: "succses" })
    } catch (error) {
        console.error(error);
        res.status(error.code || 500)
            .send({
                message: error.message || "General error"
            })
    }
})

router.get("/", (req, res) => {
    res.send("Cannot get users!")
})

module.exports = router