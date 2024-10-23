import Header from "../Header"
import Footer from '../Footer'
import './index.css'

const Features = () =>(
    <div className="main-container">
        <Header />
        <div className="features-section">
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
        <Footer />
    </div>
)

export default Features