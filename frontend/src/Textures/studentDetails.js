

// const  UserDetails = require('../models/UserDetails');
const mongoose = require('mongoose');
const  Organization = require('../../../backend/models/organization');



// async function registerUser(userData) {
//     const { firstName, lastName, gender, phoneNumber, organizationName, ...rest } = userData.body;
//     console.log('User data:', userData.body);
  
//     // Check if organization exists
//     const existingOrganization = await Organization.findOne({ organizationName : userData.body.organizationName });

//     console.log('existingOrganization:', existingOrganization);

//     console.log('User data:', userData.body.organizationName);
  
//     if (!existingOrganization) {
//       // Create new organization
//       const newOrganization = new Organization({ organizationName :  userData.body.organizationName });
//       try {
//         await newOrganization.save();
//         console.log('Created new organization:', userData.organizationName);
//       } catch (error) {
//         if (error.code === 11000 && error.keyPattern && error.keyPattern.name === 1) {
//             console.error('Organization with this name already exists.');
//             // Handle duplicate organization name error
//         } else {
//             console.error('Error creating organization:', error);
//             // Handle other errors
//         }
//       }
//     }
  
//     // Check if user already exists
//     // const existingUser = await UserDetails.findOne({ organizationName, phoneNumber });

//     // if (existingUser) {
//     //     console.log('User already exists');
//     //     // Return a response indicating that the user already exists
//     //     return;
//     // }
//     // Create user with the organization name
//     const newUser = new UserDetails({ firstName, lastName, gender, phoneNumber, organizationName, ...rest });
//     try {
//       await newUser.save();
//       console.log('User registered successfully!');
//     } catch (error) {
//       console.error('Error registering user:', error);
//       // Handle error (e.g., validation errors)
//     }
//   }
  
// // const studentDetails = async (req, res) => {
// //     console.log('StudentDetails');
// //     console.log(req.body);
// //     res.json({ message: 'Student details received successfully' });
// // };

// module.exports =  registerUser;

const UserDetails = new mongoose.Schema({
    firstName: { 
        type: String, 
        required: true 
    },
    lastName: { 
        type: String, 
        required: true 
    },
    gender: String,
    phoneNumber: String,
    organizationName: { 
        type: String, 
        required: true
     },
    organizationAddress: String,
    branch: String,
    Stream: String,
  });

  

const getCollectionName = (organizationName) => {
    return organizationName.toLowerCase().replace(/\s+/g, '_') + '_data';
};

const getDataModelForOrganization = (organizationName) => {
    const collectionName = getCollectionName(organizationName);
    return mongoose.model(collectionName, UserDetails);
};

const registerUser = async (userData) => {
    const { firstName, lastName, organizationName, ...rest } = userData.body;
    console.log('User data:', userData.body);

    // Check if organization exists
    let organization = await Organization.findOne({ organizationName: organizationName });

    if (!organization) {
        // Create new organization
        organization = await Organization.create({ organizationName: organizationName });
    }

    // Get data model for the organization
    const DataModel = getDataModelForOrganization(organizationName);

    try {
        // Create new data entry for the user in the organization's collection
        await DataModel.create({ firstName, lastName, ...rest });
        console.log('User registered successfully for organization:', organizationName);
    } catch (error) {
        console.error('Error registering user:', error);
        // Handle error (e.g., validation errors)
    }
};

module.exports = registerUser;