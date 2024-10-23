import './index.css'

import { FaTelegramPlane, FaRedditAlien, FaFacebookF, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const telegram=<FaTelegramPlane className="white-icon mr-4" />
const instagram=<FaInstagram className="white-icon mr-4" />
const twitx=<BsTwitterX className="white-icon mr-4" />
const facebook=<FaFacebookF className="white-icon mr-4" />
const reddit=<FaRedditAlien className="white-icon" />

const Footer = () =>(
    <>
        <div className="footer container">
            <div className="row">
                <div className="d-flex flex-column col-12 col-sm-6 footer-left-container">
                    <div className="footer-left-in-con1">
                        <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png" alt="img1" className="footer-img" />
                        <h1 className="footer-left-h1">EthAi</h1>
                    </div>
                    <div className="footer-left-in-con2">
                        {telegram}
                        {instagram}
                        {twitx}
                        {facebook}
                        {reddit}
                    </div>
                </div>
                <div  className="footer-right-container col-sm-6 d-none d-sm-block">
                    <h1 className="footer-right-h1">{`"Design for traders of today,just like you."`}</h1>
                    <p className="footer-p">What's your work email? <button className="footer-btn btn">Get Started</button></p>
                </div>
            </div>
        </div>
    </>
)

export default Footer