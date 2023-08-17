import {React, useState} from 'react'

const Footer = ({data}) => {
    const initialFormData = {
        InputName: '',
        InputEmail: '',
        InputPhone: '',
        InputZipCode: '',
        InputMessage: '',
      };
    
      const [formData, setFormData] = useState(initialFormData);
      const [submitted, setSubmitted] = useState(false);
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const response = await fetch('http://localhost:3000/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            // Show a success message
            setSubmitted(true);
            setFormData(initialFormData); // Clear the form
          } else {
            // Handle error response
            console.error('Form submission failed');
          }
        } catch (error) {
          // Handle fetch error
          console.error('An error occurred while submitting the form:', error);
        }
      };
  return (
    <>
<section id="contact">
    <h2 id="dev-snippet-title" className="text-center">Contact Us</h2>
    <div className="container mr_top_10">
        <div className="row">
            <div className="col-lg-7 col-md-6 col-sm-6">
            {submitted ? (
        <p>Thank you for your submission!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                name="InputName"
                placeholder="Enter Name"
                value={formData.InputName}
                onChange={handleInputChange}
                required
              />
              <span className="input-group-addon">
                <i className="glyphicon glyphicon-user form-control-feedback"></i>
              </span>
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                name="InputEmail"
                placeholder="Enter Email"
                value={formData.InputEmail}
                onChange={handleInputChange}
                required
              />
              <span className="input-group-addon">
                <i className="glyphicon glyphicon-send form-control-feedback"></i>
              </span>
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                name="InputPhone"
                placeholder="Enter Phone Number"
                value={formData.InputPhone}
                onChange={handleInputChange}
                required
              />
              <span className="input-group-addon">
                <i className="glyphicon glyphicon-earphone form-control-feedback"></i>
              </span>
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                name="InputZipCode"
                placeholder="Enter Zip Code"
                value={formData.InputZipCode}
                onChange={handleInputChange}
                required
              />
              <span className="input-group-addon">
                <i className="glyphicon glyphicon-pushpin form-control-feedback"></i>
              </span>
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <textarea
                name="InputMessage"
                className="form-control"
                rows="5"
                placeholder="Type Message Text"
                value={formData.InputMessage}
                onChange={handleInputChange}
                required
              ></textarea>
              <span className="input-group-addon">
                <i className="glyphicon glyphicon-envelope form-control-feedback"></i>
              </span>
            </div>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-outline btn-xl page-scroll pull-right">
              Submit
            </button>
          </div>
        </form>
      )}
            </div>
            <div className="col-lg-4 col-md-5 col-sm-6 col-md-offset-1">
                <address>
                    <p className="address_icon"><i className="icon-home"></i></p>
                    <p className="lead">Office Location</p>
                    <p className="lead"><i className="icon-location-pin"></i> {data.brandname} <br /> 19266 Coastal Hwy, Unit 4-587, Rehoboth Beach, DE 19971</p>
                    <p className="lead"><i className="icon-envelope-open"></i> Email: info@{data.brandurl}</p>
                </address>
            </div>
        </div>
    </div>
</section>
<footer>
    <div className="container">
        <p>&copy; {new Date().getFullYear()} {data.brandname}. All Rights Reserved.</p>
        <ul className="list-inline">
            <li>
                <a href="/privacy-policy">Privacy</a>
            </li>
            <li>
                <a href="/terms">Terms</a>
            </li>
        </ul>
    </div>
</footer>
</>
  )
}

export default Footer

