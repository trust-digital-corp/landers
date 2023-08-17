import {React} from 'react'

const RateCalculator = () => {
  return (
<section id="calculator" className="loan-calculator">
        <div className="container">
            <div className="row  text-center">
                <div className="col-md-10 col-md-offset-1">
                    <h2 className="section-heading">Loan Calculator</h2>
                    <p className="text-muted">Calculate EMI for a loan. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-md-8 loan-details-box">
                    <div className="single-loan-slider">
                        <h4>Amount <span className="mm-amount">(Minimum $5000)</span></h4>
                        <div id="amount-slide"></div>
                        <div>
                            <h5><span>$</span> <span id="amount"></span></h5>
                        </div>
                    </div>
                    <div className="single-loan-slider">
                        <h4>Duration of Months</h4>
                        <div id="duration-slide"></div>
                        <div>
                            <h5><span id="duration"></span> <span>Months</span></h5>                            
                        </div>
                    </div>
                    <div className="single-loan-slider">
                        <h4>Rate of Interest</h4>
                        <div id="intrest-slide"></div>
                        <div>
                            <h5><span id="intrest"></span> <span>%</span></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 text-center loan-emi-box">
                    <div className="total-calculation">
                        <div className="single-total">
                            <h5>Monthly EMI</h5>
                            <p className="emi-price" id="emi">0</p>
                        </div>
                        <div className="single-total">
                            <h5>Total Interest</h5>
                            <p id="tbl_emi">0</p>
                        </div>
                        <div className="single-total">
                            <h5>Payable Amount</h5>
                            <p id="tbl_la">0</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default RateCalculator

