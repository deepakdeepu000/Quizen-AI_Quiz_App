
const mongoose = require('mongoose');
const Organization = require('../models/Organization');
const { addUserToOrg } = require('./AddUserToOrg');

const createOrganizationUserCollection = async (userData , organizationName) => {
    try {
        const OrganizationName = organizationName.replace(/\s/g, '_');
        console.log('OrganizationName:', OrganizationName);
      const userCollectionName = `${OrganizationName}_users`;
      console.log('user data:', userData);  

    try{
        const createdUser = await addUserToOrg(userData);
    }catch(err){
        console.log('Error creating user:', err);
        throw new Error(`Error creating user: ${err.message}`);
    }


      console.log(`User collection created for ${organizationName}`);
      console.log('User is saved to the collection');
    } catch (err) {
      console.error(`Error creating user collection for ${organizationName}:`, err);
    }
  };

  module.exports = { createOrganizationUserCollection };