import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
import { useNavigate } from "react-router-dom";
const Footer = () => {
    const navigate=useNavigate();
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                    Providing a seamless shopping experience with quality products and excellent customer service.
                     Your satisfaction is our priority. Shop now and enjoy a delightful online shopping journey.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                        246 5th main Srigandha Kavalu D-group Layout Bangalore Karnataka 560091
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: 
9110852277
</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: shashankh1092@gmail.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text" onClick={() => { 
                        navigate('/category/1')
                    }}>Headphones</span>
                    <span className="text" onClick={() => { 
                        navigate('/category/4')
                    }}>Smart Watches</span>
                    <span className="text"onClick={() => { 
                        navigate('/category/3')
                    }}>Bluetooth Speakers</span>
                    <span className="text" onClick={() => { 
                        navigate('/category/2')
                    }}>Wireless Earbuds</span>
                    <span className="text">Home Theatre</span>
                    <span className="text">Projectors</span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                        E-STORE 2022 CREATED BY SHASHANK H PREMIUM E-COMMERCE
                        SOLUTIONS.
                    </span>
                    <img src={Payment} />
                </div>
            </div>
        </div>
    );
};

export default Footer;