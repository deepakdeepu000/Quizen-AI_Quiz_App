const UserSchema = require('../models/UserOrgmodal');
const mongoose = require('mongoose');

const addUserToOrg = async (userData) => {
    try {
        const newUser = new UserSchema(userData);
        const organizationName = userData.organizationName; 
        // Save the new user document to the user collection (dynamic name)
        const userCollectionName = `${organizationName}_users`;
        const UserForOrganization = mongoose.model(userCollectionName, UserSchema.schema);
        console.log('UserForOrganization:', UserForOrganization);
        console.log('newUser:', newUser);
        
        // Check if user already exists in the organization
        const existingUser = await UserForOrganization.findOne({ email: newUser.email });
        if (existingUser) {
            throw new Error('User already exists in the organization');
        }
        await UserForOrganization.create(newUser);
    } catch (error) {
        throw new Error(`Error registering user: ${error.message}`);
    }

}

module.exports = { addUserToOrg };
