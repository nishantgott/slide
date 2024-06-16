import userCredentialModel from "../models/userCredentialModel.js";
import { comparePassword, hashPassword } from '../helpers/authHelper.js';
import JWT from "jsonwebtoken";
import userInterestModel from "../models/userInterestModel.js";
import userProfileModel from "../models/userProfileModel.js";


export const registerController = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username) return res.send({ message: `Username is compulsory` });
        if (!password) return res.send({ message: `Password is compulsory` });

        const existingUser = await userCredentialModel.findOne({ username });

        // console.log('here');
        if (existingUser) {
            return res.status(200).send({
                success: true,
                message: 'User already registered. Please log in '
            })
        }

        const hashedPassword = await hashPassword(password);
        const user = await userCredentialModel({ username, password: hashedPassword }).save();

        const userInterest = new userInterestModel({ username });
        await userInterest.save();

        res.status(200).send({ success: true, message: 'User created successfully', user });

    } catch (error) {
        res.status(500).send({ success: false, message: 'Could not register', error });
    }
}

export const loginController = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username) return res.send({ message: `Username is compulsory` });
        if (!password) return res.send({ message: `Password is compulsory` });

        const user = await userCredentialModel.findOne({ username });

        if (!user) {
            return res.status(200).send({
                success: false,
                message: 'User doesnt exist'
            })
        }
        const match = await comparePassword(password, user.password);

        if (!match) {
            return res.status(500).send({
                success: false,
                message: 'Invalid Password'
            })
        }
        const token = await JWT.sign({ username }, process.env.JWT_SECRET, { expiresIn: "7d" });
        return res.status(200).send({
            success: true,
            message: 'Login Successful',
            user: {
                _id: user._id,
                username: user.name,
            },
            token
        })

    } catch (error) {
        res.status(500).send({ success: false, message: 'Could not login', error });
    }
}