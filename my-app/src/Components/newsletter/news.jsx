

import React from "react";
import "./news.css";
import { FaRegPaperPlane } from "react-icons/fa";


const Newsletter = () => {


    return (

        <div className="news-section">
            <div className="news-heading">

                <div className="news-hh">

                    <h3>NEWSLETTER</h3>
                    <h1>Stay up to date, subscribe <br /> to the free <span>newsletter !</span></h1>


                </div>

                <div className="news-e-s">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="news-input"
                    />

                    <button className="news-btn">
                        <div className="msg-box">
                            <FaRegPaperPlane className="msg-icon" />
                        </div>
                        SUBSCRIBE
                    </button>
                </div>

            </div>
        </div>

    );



}


export default Newsletter;