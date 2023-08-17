//POST '/lead'
const newLead = (req, res, next) => {
    const formData = req.body; // Assuming the form data is sent in the request body

  // Process the formData as needed
  console.log('Received Lead Form Data:', formData);

  // You can send a response indicating success
  res.json({ message: 'Form data submitted successfully' });
};
//POST '/lead'
const newContact = (req, res, next) => {
    const formData = req.body; // Assuming the form data is sent in the request body

  // Process the formData as needed
  console.log('Received Contact Form Data:', formData);

  // You can send a response indicating success
  res.json({ message: 'Form data submitted successfully' });
};

//export controller functions
module.exports = {
    newLead,
    newContact
};