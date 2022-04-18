import React, {useState} from "react";
import person from '../../images/icon-person.svg'

const Bill = () => {
  const [bill, setBill] = useState(0)
  const [tip, setTip] = useState()
  const [people, setPeople] = useState(0)

  console.log('el valor del tip:', tip)
  return (
    <div className="bill-container">
      <div>
        <p className="bill-title">Bill</p>
        <div className="bill-input-container">
          <p style={{ fontSize: "x-large" }}>$</p>
          <input type="number" placeholder={bill} className="bill-input"/>
        </div>
      </div>

      <div>
        <p className="bill-title">Select Tip %</p>
        <div className="bill-tip-selection-container">
          <button className={tip === 5 ? 'tip active' : 'tip'} onClick={()=>setTip(5)}>5%</button>
          <button className={tip === 10 ? 'tip active' : 'tip'} onClick={()=>setTip(10)}>10%</button>
          <button className={tip === 15 ? 'tip active' : 'tip'} onClick={()=>setTip(15)}>15%</button>
          <button className={tip === 25 ? 'tip active' : 'tip'} onClick={()=>setTip(25)}>25%</button>
          <button className={tip === 50 ? 'tip active' : 'tip'} onClick={()=>setTip(50)}>50%</button>
            {
              tip === true ? (
                <input type="number" placeholder="0" className="bill-input" />
              )
              : <span className="tip-custom" onClick={()=>setTip(true)}>Custom</span>
            }
        </div>
      </div>

      <div className="bill-people">
        <p className="bill-title">Number of People</p>
        <div className="bill-input-container">
          <span>
              <img src={person} alt="person" />
          </span>
          <input type="number" placeholder="0" className="bill-input" />
        </div>
      </div>
    </div>
  );
};

export default Bill;
