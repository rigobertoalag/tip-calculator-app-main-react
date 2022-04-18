import React from "react";
import './total.scss'

const Total = () => {
  return (
    <div className="total-container">

      <div className="total-amount">
        <div className="ta-container">
          <span>Tip Amount</span>
          <span className="tt-container-sub">/ person</span>
        </div>
        <p className="tip-total">$0.00</p>
      </div>

      <div className="total-total">
        <div className="tt-container">
          <span>Total</span>
          <span className="tt-container-sub">/ person</span>
        </div>
        <p className="tip-total">$0.00</p>
      </div>

      <button className="reset-btn">RESET</button>
    </div>
  );
};

export default Total;
