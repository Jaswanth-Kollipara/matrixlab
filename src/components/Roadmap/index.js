import Header from "../Header"
import Footer from '../Footer'
import './index.css'

import { MdOutlineCheckCircle } from "react-icons/md";
import { FaPlus } from "react-icons/fa";

const check=<MdOutlineCheckCircle className="aqua-icon" />
const plus=<FaPlus className="aqua-icon mr-3" />

const Roadmap = () =>(
    <div className="main-container">
        <Header />
        <div id="roadmap" className="roadmap">
            <h1 className="roadmap-h1 mb-5">Roadmap</h1>
            <div className="container roadmap-container1">
                <div className="row">
                    <div className="d-flex flex-column col-12 col-sm-6">
                        <div>
                            <button className="roadmap-btn btn">PHASE 1</button>
                        </div>
                        <h1 className="roadmap-in-h1">Kicking Off</h1>
                        <p className="roadmap-p">{check} Launch of ethAi: Offcially</p>
                        <p className="roadmap-p">{check} Development of Core AI Agents</p>
                        <p className="roadmap-p">{check} User Onboarding Campaign</p>
                        <p className="roadmap-p">{check} Community Engagement Initiatives</p>
                    </div>
                    <div className="col-12 col-sm-6">
                        <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png" alt="img1" className="roadmap-img" />
                    </div>
                </div>
            </div>
            <div className="container roadmap-container1">
                <div className="row">
                    <div className="d-flex flex-column col-12 col-sm-6 order-1 order-sm-2">
                        <div>
                            <button className="roadmap-btn btn">PHASE 2</button>
                        </div>
                        <h1 className="roadmap-in-h1">Bigger Insights</h1>
                        <p className="roadmap-p">{check} Introduction of Advanced AI Agents</p>
                        <p className="roadmap-p">{check} Strategic Partnerships</p>
                        <p className="roadmap-p">{check} User Interface Optimization</p>
                        <p className="roadmap-p">{check} Comprehensive marketing Campaign</p>
                    </div>
                    <div className="col-12 col-sm-6 order-2 order-sm-1">
                        <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png" alt="img1" className="roadmap-img" />
                    </div>
                </div>
            </div>
            <div className="container roadmap-container1">
                <div className="row">
                    <div className="d-flex flex-column col-12 col-sm-6">
                        <div>
                            <button className="roadmap-btn btn">PHASE 3</button>
                        </div>
                        <h1 className="roadmap-in-h1">Full Power</h1>
                        <p className="roadmap-p">{check} Introduction of Enhanced Features</p>
                        <p className="roadmap-p">{check} API Introduction for Data Access</p>
                        <p className="roadmap-p">{check} Launch of Community-Driven Initiatives</p>
                        <p className="roadmap-p">{check} Continuous Improvement and Updates</p>
                    </div>
                    <div className="col-12 col-sm-6">
                        <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png" alt="img1" className="roadmap-img" />
                    </div>
                </div>
            </div>
            <div className="container roadmap-container2">
                <div className="row">
                    <div className="col-12 col-sm-6">
                        <h1 className="roadmap-h1">Frequently Asked <br /> Questions</h1>
                    </div>
                    <div className="d-flex flex-column col-12 col-sm-6">
                        <p className="roadmap-p1">{plus} What is EthAi?</p>
                        <p className="roadmap-p1">{plus} How can EthAi can help me as a Trader?</p>
                        <p className="roadmap-p1">{plus} Who can use EthAi?</p>
                        <p className="roadmap-p1">{plus} How does EthAi track smart money flow?</p>
                        <p className="roadmap-p1">{plus} How does EthAi track smart money flow?</p>
                    </div>
                </div>
            </div>    
            <div className="explore-container">
                <div className="explore-container-main">
                    <h1 className="explore-h1">Explore Our <span className="explore-sp">dApp</span></h1>
                    <p className="explore-p">Ethai is an Al-powered dApp designed to help traders make smarter, data-driven decisions. By tracking smart money flows, monitoring key wallets, and providing real-time market insights, EthAi empowers users to stay ahead of trends. The platform offers intuitive Al features for asset recommendations, market analysis, and personalized crypto Q&A, making it the ultimate tool for both novice and experienced traders.</p>
                    <button className="explore-btn btn">Open dApp</button>
                </div>
            </div>
        </div>
        <Footer />
    </div>
)

export default Roadmap