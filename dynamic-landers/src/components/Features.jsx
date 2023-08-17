import React from 'react';
import homeReasonImage from '../assets/img/home-reason.png';
import autoReasonImage from '../assets/img/auto-reason.png';

const Features = ({ data }) => {
    const imageMap = {
        'Find Your Dream Home': homeReasonImage,
        'Instant Approval For Car Loan': autoReasonImage,
        // 'Your Third Title': otherReasonImage
      };
  const { features } = data;
  const reasonImage = imageMap[data.title];

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="section-heading">
              <h2>{features.title}</h2>
              <p className="text-muted">{features.description}</p>
              <hr />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="device-container">
              <div className="device-mockup">
                <div className="device">
                  <div className="screen">
                  <img src={reasonImage} className="img-responsive" alt="Feature" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="container-fluid">
              <div className="row">
                {features.items.map((item, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="feature-item">
                      <i className={item.icon}></i>
                      <h3>{item.title}</h3>
                      <p className="text-muted">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
