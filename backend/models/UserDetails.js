const mongoose = require ('mongoose')

const UserDeatilSchema = mongoose.Schema

const UserDetails = new UserDeatilSchema({
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

  

const CreateUserDetails = mongoose.model('User_details', UserDetails)


module.exports = CreateUserDetails;
