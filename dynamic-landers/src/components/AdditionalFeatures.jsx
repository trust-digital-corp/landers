import {React} from 'react'

const AditionalFeatures = () => {
  return (
    <section id="about" className="about text-center">
        <div className="container">
            <div className="row">
                <div className="col-md-10 col-md-offset-1">
                    <h2 className="section-heading">Car Loans - Bad Credit, Good Credit, or No Credit!</h2>
                    <p className="about_p">Getting a car loan with bad credit has never been easier! At EasyLoan, we want to help you get into the car you deserve.</p>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="main_counter_content text-center white-text wow fadeInUp">
                    <div className="col-md-3 col-sm-6">
                        <div className="single_counter">
                            <p className="counter_icon"><i className="icon-people"></i></p>
                            <span className="counter">500</span>K
                            <p>Satisfied Clients</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="single_counter">
                            <p className="counter_icon"><i className="fa fa-usd" aria-hidden="true"></i></p>
                            <span className="counter">550</span>K
                            <p>Car Loan</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="single_counter">
                            <p className="counter_icon"><i className="icon-user-following"></i></p>
                            <span className="counter">150</span>K
                            <p>Repeat Client</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="single_counter">
                            <p className="counter_icon"><i className="icon-check"></i></p>
                            <span className="counter">100</span>%
                            <p>Safe & Secure</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> 
  )
}

export default AditionalFeatures
