const User = require('../models/user-models');

const home = async (req, res) => {
    try {
        res.status(200).send("Welcome to the MERN Project using Controller Page")
    } catch (error) {
        console.log("Connection error");
    }
}

// Registration Logic
const register = async (req, res) => {
    try {
        // console.log(req.body);
        const { name, email, phone, password } = req.body;
        const userExists = await User.findOne({ email: email });
        if (userExists) {
            return res
                .status(400)
                .send({
                    message: "User already exists"
                });
        }
        const userCreated = await User.create({ name, email, phone, password });
        res
            .status(200)
            .send({
                message: "Registration Successfull",
                token: await userCreated.generateToken(),
                userId: userCreated._id.toString()
            });
    } catch (error) {
        res
            .status(500)
            .json({
                Message:
                    error
            })
    }
}

// Login logic

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExists = await User.findOne({ email });
        // console.log(userExists);
        if (!userExists) {
            return res.status(404).json({ message: "User not found" });
        }
        // const user = await bcrypt.compare(password, userExists.password);
        const user = await userExists.comparePassword(password);
        if (user) {
            res
                .status(200)
                .json({
                    message: "Login Successfully",
                    token: await userExists.generateToken(),
                    userId: userExists._id.toString()
                });
        } else {
            res
                .status(401)
                .send({
                    message: "Invalid credentials"
                });
        }
    } catch (error) {
        console.log(error);
    }
}

// To send user data 
const user = async (req, res) => {
    try {
        const userData = req.user;
        // console.log(userData);
        res.status(200).json({ userData });
    } catch (error) {
        console.log(error);
    }
}
module.exports = { home, register, login, user };