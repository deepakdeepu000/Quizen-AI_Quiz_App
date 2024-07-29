const Organization = require('../models/Organization'); 
const { createOrganizationUserCollection } = require('../services/OrgService');
const { addUserToOrg } = require('../services/AddUserToOrg');

async function registerOrganization(req, res) {
  try {
    const orgData = req.body;
    console.log(orgData);

    const { organizationName } = orgData;

    const existingOrganization = await Organization.findOne({ organizationName });


    if (existingOrganization) {
        console.log('Organization already exists:', existingOrganization);
        await addUserToOrg(orgData);
        // const { userId } = req.body;
        // existingOrganization.users.push(userId);
        // await existingOrganization.save();
      } else {
            const newOrganization = new Organization({ organizationName });
            await newOrganization.save();
            console.log('Created new organization:', newOrganization);
            await createOrganizationUserCollection( orgData ,newOrganization.organizationName);
      }

    res.status(201).json("organization is created successfully");
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ error: 'Error creating organization' }); // Generic error for client
  }
}

module.exports = { registerOrganization };
