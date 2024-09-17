const mongoose = require("mongoose")

exports.UserModel = mongoose.model("users", {
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    role: {
        type: String,
        default: "user",
    },
})

