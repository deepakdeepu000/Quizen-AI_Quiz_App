// const mongoose = require ('mongoose')

// const OrganizationSchema = mongoose.Schema

// const OrganizationDetail = new OrganizationSchema({
//     organizationName: { 
//         type: String, 
//         required: true, 
//         unique: true 
//     }, // Ensures unique org names
// });

// const Organization = mongoose.model('Organization', OrganizationDetail);

// module.exports = Organization;

const mongoose = require('mongoose');

const organizationSchema = new mongoose.Schema({
    organizationName: {
        type: String,
        required: true,
        unique: true
    }
});

const Organization = mongoose.model('Organization', organizationSchema);

module.exports = Organization;


