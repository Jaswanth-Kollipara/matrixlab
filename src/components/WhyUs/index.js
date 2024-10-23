import Header from "../Header"
import Footer from '../Footer'
import './index.css'

import { FcBullish } from "react-icons/fc"
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { LiaToolsSolid } from "react-icons/lia";
import { GiUpgrade } from "react-icons/gi";

const stats=<FcBullish className="why-con-icon" />
const box=<MdCheckBoxOutlineBlank className="why-con-icon" />
const tools=<LiaToolsSolid className="why-con-icon" />
const upgrade=<GiUpgrade className="why-con-icon" />

const WhyUs = () =>(
    <div className="main-container">
        <Header />
        <div className="why-us">
            <h1 className="why-h1">About EthAi</h1>
            <p className="why-p">At EthAi, we're all about making crypto trading easier and more intuitive. we provide tools <br /> that help traders keep up with all new marker trends, task top traders' movements.</p>
            <div className="why-btn-container">
                <button className="why-btn btn">Read more</button>
            </div>
            <div className="container why-container">
                <div className="row">
                    <div className="why-container-in d-flex col-12 col-sm-6 flex-column">
                        {stats}
                        <h1 className="why-con-h1">Stay Ahead</h1>
                        <p className="why-con-p">No more guesswork-get clear, trustable insighys.</p>
                    </div>
                    <div className="why-container-in d-flex col-12 col-sm-6 flex-column">
                        {box}
                        <h1 className="why-con-h1">Know Your Assets</h1>
                        <p className="why-con-p">Always stay on top of how your investments are performing.</p>
                    </div>
                    <div className="why-container-in d-flex col-12 col-sm-6 flex-column">
                        {tools}
                        <h1 className="why-con-h1">Simple,Not Overwhelming</h1>
                        <p className="why-con-p">Our tools are designed to make complex market analysis easy to understand and act on.</p>
                    </div>
                    <div className="why-container-in d-flex col-12 col-sm-6 flex-column">
                        {upgrade}
                        <h1 className="why-con-h1">Future-Proof</h1>
                        <p className="why-con-p">We're constantly improving, adding new features to help you make the most informed decisions possible</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
)

export default WhyUs