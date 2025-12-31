
import React from "react";
import "./Apage.css";
import BannerTop from "../topbanner/banner";
import Navbar from "../navbar/Navbar";
import AboutSection from "../about/about";
import Payments from "../payment/payment";
import Newsletter from "../newsletter/news";
import Logos from "../logos/logo";
import Footer from "../footer/footer";




const AboutPage = () =>{

 return(
    <>
        <BannerTop />
        <Navbar />
    
        <div className="about-page">

        <div className="a-page-section">
            <div className="a-page-head">

                <h1>ABOUT <span>US</span> </h1>


            </div>
        </div>





        <AboutSection />
        <Payments />
         <Newsletter />
          <Logos />
          <Footer />
        </div>
    
    
    </>

 
    )
   

}




export default AboutPage;