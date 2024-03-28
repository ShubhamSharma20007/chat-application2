const bcrypt = require('bcrypt');
const UserModel = require("../models/UserModel")
const register = async (req, res) => {

    try {
        const { username, email, password, con_password } = req.body;

        //validation
        if (!username || !email || !password || !con_password) {
            return res.status(400).send({ message: "All fields are required" })
        }

        //check email exists or not
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(400).send({ message: "User already exist" })
        }

        // bcrypt password
        const bcryptPass = await bcrypt.hash(password, 10);

        //save user
        const userModel = await UserModel.create({
            username, email, password:bcryptPass
        })
        
        return res.status(201).send({ success:true,message: "User created successfully" })
    } catch (error) {
        return res.status(500).send({success:false, message: "Something went wrong",error:error.message })
    }

}


// login

const login = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

module.exports = { register,login }