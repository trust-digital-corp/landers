import { React, useState } from 'react'

const Hero = ({ data }) => {
    const { title, subtitle, interestRates, ctaButton, formSection } = data;

    const initialFormData = {
        name: '',
        email: '',
        phone: '',
        city: '',
        zipCode: '',
        amount: '',
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
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/lead', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
          })
            .then((response) => {
              if (response.ok) {
                setSubmitted(true);
        setFormData(initialFormData); // Clear the form

              } else {
                // Handle error response
        console.error('Form submission failed');
              }
            })
            .catch((error) => {
              // Handle fetch error
              console.error('An error occurred while submitting the form:', error);
            });
      };
    return (
        <header id="page_top" className="car_loan" style={{ paddingTop: '100px' }}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-7">
                        <div className="header-content">
                            <div className="header-content-inner">
                            <h1>{title}</h1>
              <p>{subtitle}</p>
              {interestRates.map((rate, index) => (
                <h2 key={index}>
                  {rate.rate} <span>{rate.description}</span>
                </h2>
              ))}
              <a href={ctaButton.link} className="btn btn-outline btn-xl page-scroll">
                {ctaButton.text}
              </a>
              </div>
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <div className="form-container">
                            <div className="form-mockup">
                            <h2>{formSection.heading}</h2>
                <h4>{formSection.subheading}</h4>
                                {submitted ? (
        <p style={{color:'#4BB543'}}>Thank you for your submission!</p>
      ) : (
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            placeholder="Name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            placeholder="E-mail"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="phone"
                                            className="form-control"
                                            placeholder="Phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="city"
                                            className="form-control"
                                            placeholder="Type Your City Name"
                                            value={formData.city}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="zipCode"
                                            placeholder="Zip Code"
                                            value={formData.zipCode}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="amount"
                                            placeholder="Type Your Amount"
                                            value={formData.amount}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-default quote_btn">Send Request</button>
                                </form>
      )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Hero
