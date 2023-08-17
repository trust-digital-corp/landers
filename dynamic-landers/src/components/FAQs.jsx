import React from 'react';

const FAQs = ({ data }) => {
  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
          <i className="icon-question faq_icon"></i>
            <h2 className="faq_title">{data.ctaSection.title}</h2>
            <p>{data.ctaSection.description}</p>
            <a className="btn btn-primary page-scroll" href={data.ctaSection.buttonLink}>{data.ctaSection.buttonText}</a>
          </div>
          <div className="col-md-7 mar-20t">
            <div className="panel-group" id="accordion">
              {data.faqs.map((faq, index) => (
                <div className="panel panel-default" key={index}>
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href={`#collapse${index + 1}`}>
                        {faq.question}
                      </a>
                    </h4>
                  </div>
                  <div id={`collapse${index + 1}`} className={`panel-collapse collapse${index === 0 ? ' in' : ''}`}>
                    <div className="panel-body">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQs;
