const mongoose = require ('mongoose')
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
        // validate: {
        //     validator: function(value) {
        //         // Password must have at least one number, one capital letter, one small letter,
        //         // at least one unique character, and be at least 8 characters long
        //         const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
        //         return regex.test(value);
        //     },
        //     message: 'Password must have at least one number, one capital letter, one small letter, at least one unique character, and be at least 8 characters long'
        // }
    }
})

userSchema.methods.comparePassword = async function(candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

const CreateUser = mongoose.model('User', userSchema)

module.exports = CreateUser;
