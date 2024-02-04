import User from "../models/user.model.js"
import bcryptjs from 'bcryptjs';

export const signup = async (req, res, next) => {
    const {username, email, password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10); 
    const newUser = new User({username, email, password: hashedPassword});
    try {
       await newUser.save();
       res.status(201).json("User created succesfully");
    } catch (error) {
        next(error);
    }
};

export const sigin = async (req, res, next) => {
    const { email, password } = req.body
    try {
        const validUser = await User.findOne({ email })
        if (!validUser) return next(errorHandler(404, 'User not found!'))
        const validPassword = bcryptjs.compareSync(password, validUser.password)
        if (!validPassword) return next(errorHandler(401, 'Wrong credentials!'))
    } catch (error) {
        next(error)
    }
}