import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from "recharts"
import './index.css'
import { FcBullish } from "react-icons/fc"
import { MdCheckBoxOutlineBlank, MdOutlineCheckCircle } from "react-icons/md";
import { LiaToolsSolid } from "react-icons/lia";
import { GiUpgrade } from "react-icons/gi";
import { FaTelegramPlane, FaRedditAlien, FaFacebookF, FaInstagram, FaPlus } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const stats=<FcBullish className="why-con-icon" />
const box=<MdCheckBoxOutlineBlank className="why-con-icon" />
const tools=<LiaToolsSolid className="why-con-icon" />
const upgrade=<GiUpgrade className="why-con-icon" />
const check=<MdOutlineCheckCircle className="aqua-icon" />
const plus=<FaPlus className="aqua-icon mr-3" />
const telegram=<FaTelegramPlane className="white-icon mr-4" />
const instagram=<FaInstagram className="white-icon mr-4" />
const twitx=<BsTwitterX className="white-icon mr-4" />
const facebook=<FaFacebookF className="white-icon mr-4" />
const reddit=<FaRedditAlien className="white-icon" />

const data = [
    {
      count: 90,
      language: "Liquid Pool (90%)",
    },
    {
      count: 5,
      language: "Marketing (5%)",
    },
    {
      count: 35,
      language: "Team (35%)",
    },
]

const Home = () => (
    <div className="main-container">
        <div id="section1">
            <nav className="nav-container col-12 text-light fixed-top">
                <div className="nav-container1">
                    <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png" alt="img1" className="nav-img" />
                    <p className="nav-con1-p">EthAi</p>
                </div>
                <div className="nav-container2 col-6 justify-context-center">
                    <a className="nav-con2-a" href="#features-section">Features</a>
                    <a className="nav-con2-a" href="#why-us">Why Us</a>
                    <a className="nav-con2-a" href="#tokenomics">Tokenomics</a>
                    <a className="nav-con2-a" href="#roadmap">Roadmap</a>
                </div>
                <div className="nav-container3 justify-context-end">
                    <button className="nav-con3-btn1 btn">Log in</button>
                    <button className="nav-con3-btn2 btn">Whitepaper</button>
                </div>
            </nav>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark nav-container-mini fixed-top">
                <a class="navbar-brand" href="#home-section">
                    <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png" alt="img1" className="nav-img-mini" />
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon bg-light"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active text-white" href="#features-section">Features</a>
                        <a class="nav-link text-white" href="#why-us">Why Us</a>
                        <a class="nav-link text-white" href="#tokenomics">Tokenomics</a>
                        <a class="nav-link text-white" href="#roadmap">Roadmap</a>
                    </div>
                </div>
            </nav>
        </div>
        <div id="home-section" className="home-section">
            <h1 className="home-h1">When Innovation <br /> Meets <span className="home-sp">Investment</span></h1>
            <p className="home-p">Empowering Trading Though Advanced Technology</p>
            <button className="home-btn btn">Open dApp</button>
        </div>
        <div id="features-section" className="features-section">
            <h1 className="features-section-h1">Our Fratures</h1>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-3 d-flex flex-column feature-con1 mb-3">
                        <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png" alt="img1" className="feature-img1 mr-auto ml-auto" />
                        <h1 className="feature-h1">Trade Optimizer</h1>
                        <p className="feature-p">Find the right moments to buy or sell, with personalized trade suggestions designed to help you make the most of every opportunity.</p>
                    </div>
                    <div className="col-12 col-sm-6 d-flex flex-column feature-con2 mb-3">
                        <div className="d-flex flex-column feature-con2-in1">
                            <h1 className="feature-h1 ml-sm-3">Market Insight</h1>
                            <p className="col-12 col-sm-8 feature-p">Stay ahead of the market. Get real-time updates on market trends, task top trends' movements, and sport signals from key influencers.</p>
                        </div>
                        <div className="feature-con2-in2">
                            <h1 className="feature-con2-in2-h1">Our Features</h1>
                        </div>
                    </div>
                    <div className="col-12 col-sm-3 d-flex flex-column feature-con3 mb-3">
                        <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png" alt="img1" className="feature-img2 order-2 order-sm-0" />
                        <h1  className="feature-h1">Risk Guard</h1>
                        <p  className="feature-p">Get alerts on market swings and potential risks before they impact tour profolio. this agent helps you navigate volatility and stay prepared for anything.</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="feature1-con1 d-flex flex-column col-12 col-sm-4 mb-3">
                        <h1 className="feature-h1">Portfolio Sync</h1>
                        <p className="feature-p col-12 col-sm-9">Easily manage your portfolio. You'll always know what you own, how it's performing, and where it's headed.</p>
                    </div>
                    <div className="feature1-con2 d-flex flex-column col-12 col-sm-8">
                        <h1 className="feature-h1">Opportunity Scout</h1>
                        <p className="feature-p col-12 col-sm-7">Find excisting new projects, events and tokens that others might be missing. Identifying promising opportunities early, so you never miss out on the next big thing.</p>
                    </div>
                </div>
            </div>
        </div>
        <div id="why-us" className="why-us">
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
        <div id="tokenomics" className="tokenomics">
            <h1 className="tokenomics-h1 mb-5">Tokenomics</h1>
            <div className="container tokenomics-container">
                <div className="row">
                    <div className="d-flex col-12 col-sm-6 tokenomics-chart">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    cx="70%"
                                    cy="40%"
                                    data={data}
                                    startAngle={0}
                                    endAngle={360}
                                    innerRadius="40%"
                                    outerRadius="70%"
                                    dataKey="count"
                                >
                                    <Cell name="Liquid Pool (90%)" fill="#00ffff" />
                                    <Cell name="Marketing (5%)" fill="#00b3b3" />
                                    <Cell name="Team (35%)" fill="#008080" />
                                </Pie>
                                <Legend
                                    iconType="circle"
                                    layout="vertical"
                                    verticalAlign="bottom"
                                    align="right"
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="d-flex flex-column col-12 col-sm-6 tokenomics-con-in">
                        <div className="tokenomics-container-in mb-3">
                            <p className="tokenomics-con-in-p">Name : EthAi</p>
                            <p className="tokenomics-con-in-p">Token Name : $EthAi</p>
                            <p className="tokenomics-con-in-p">Token stanard : ERC20</p>
                            <p className="tokenomics-con-in-p">Blockchain : Ethereum</p>
                            <p className="tokenomics-con-in-p">Total Supply : 100 Million</p>
                            <p className="tokenomics-con-in-p">Tax : 5%/5%</p>
                        </div>
                        <div className="tokenomics-container-in">
                            <p className="tokenomics-con-in-p">Team : 35%</p>
                            <p className="tokenomics-con-in-p">Markering : 5%</p>
                            <p className="tokenomics-con-in-p">Liquidity Pool : 90%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
                <div  className="footer-right-container col-sm-6">
                    <h1 className="footer-right-h1">{`"Design for traders of today,just like you."`}</h1>
                    <p className="footer-p">What's your work email? <button className="footer-btn btn">Get Started</button></p>
                </div>
            </div>
        </div>
    </div>
  )
  
export default Home