const User = require('../models/User');
const bcrypt = require('bcrypt');

const userController = {
    signup: async (req, res) => {
        console.log('Signup');
        try {
            const { username, email, password } = req.body;

            console.log(username);
            console.log(email);

            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ error: 'Email is already registered' });
            }

            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            console.log(hashedPassword);

            // Create a new user
            const newUser = new User({ username, email, password: hashedPassword });

            console.log(newUser);

            // Save user to the database
            await newUser.save();

            res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    signin: async (req, res) => {
        console.log('Signin');
        try {
            const { email, password } = req.body;

            // Find user by email
            const user = await User.findOne({ email });

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            // Validate password
            const isPasswordValid = await bcrypt.compare(password, user.password);

            if (!isPasswordValid) {
                return res.status(401).json({ error: 'Invalid password' });
            }

            res.status(200).json({ message: 'Signin successful' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = userController;
