

import bycrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';


export async function createUser (req, res) {

const { name, email, password, address } = req.body;
    try {
        let user = await User.findOne({email});
        if(user) return res.status(400).json({msg: 'User already exists'});
        const role = name ==="admin" ? 'admin' : 'user';
        
        user = new User({name, email, password, address, role, createdAt: new Date()});
        const salt = await bycrypt.genSalt(10);
        user.password = await bycrypt.hash(password, salt);
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
}
export async function loginUser (req, res) {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({email});
        if(!user) return res.status(400).json({msg: 'Invalid credentials'});
        
        const isMatch = await bycrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({msg: 'Invalid credentials'});
        const createToken = (user) => {
            return jwt.sign({id: user.id, role: user.role}, process.env.JWT_SECRET, {expiresIn: '1h'});
        }
        const token = createToken(user);
        res.status(200).json({
            status: 'success',
            token,
        })
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
}