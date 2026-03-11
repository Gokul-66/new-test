import User from '../models/user.js';
export async function getUser (req, res) {
    try {
        const { email } = req.params;
        const users = await User.findOne({email}).select('-password');
        res.status(200).json(users);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
}
export async function updateUser (req, res) {
    try {
        const { email } = req.params;
        const { address } = req.body;
        const user = await User.findOneAndUpdate(
            { email },
            { address }
        ).select('-password'); 
        res.status(201).json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
}