
import React from "react";
import "./payment.css";
import paymentimg1 from "../../assets/payment1.svg";
import paymentimg2 from "../../assets/payment2.svg";
import paymentimg3 from "../../assets/payment3.svg";

const paysData = [
  {
    src: paymentimg1,
    text1: "ENTERPRISE",
    text2: "Google Corporation",
    text3: 204,
    text4: "Per month",
  },
  {
    src: paymentimg2,
    text1: "ENTERPRISE",
    text2: "Google Corporation",
    text3: 204,
    text4: "Per month",
  },
  {
    src: paymentimg3,
    text1: "ENTERPRISE",
    text2: "Google Corporation",
    text3: "Let’s chart",
    text4: "Per month",
  },
];


const Payments = () => {
  return (
    <section className="payment-section">
      <div className="top-section">
        <div className="left-side">
          <div>
            <h6>Checkout</h6>
            <h1>Pyament Method</h1>
          </div>
        </div>
        <div className="right-side">
          <div className="vertical-border"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Sed do eiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>
      </div>

      <div className="pay-section">
        {paysData.map((card, index) => (
          <div className="pay-card" key={index}>
            <img src={card.src} alt="" />
            <h2>{card.text1}</h2>
            <p className="pay-p1">{card.text2}</p>
            <hr />
            <h2>
              {index === 2 ? card.text3 : `$${card.text3}`}
            </h2>
            <p className="pay-p2">{card.text4}</p>
            <button className="pay-btn">READ MORE </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Payments;
