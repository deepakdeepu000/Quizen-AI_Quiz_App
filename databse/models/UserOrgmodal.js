const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    gender:{ type: String, required: true },
    phoneNumber: { type: String, required: true },
    organizationName:{ type: String, required: true },
    organizationAddress: { type: String, required: true },
    branch: { type: String, required: true },
    stream: { type: String , required: true }
 });

UserSchema.pre('save', function(next) {
    // Custom validation checks (e.g., password length, email format)
    // const emailRegex = /^[\w-]+(\.[\w-]+)*@gmail\.com$|^[\w-]+(\.[\w-]+)*@org\.edu\.in$|^[\w-]+(\.[\w-]+)*@outlook\.com$/;
    // if (!emailRegex.test(this.email)) {
    //     throw new Error('Invalid email format');
    // }
    next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;