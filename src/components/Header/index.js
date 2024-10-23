import { Link } from "react-router-dom";
import './index.css'

const Header= ()=>(
    <>
        <div id="section1">
            <nav className="nav-container col-12 text-light">
                <Link className="nav-container1" to="/">
                    <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png" alt="img1" className="nav-img" />
                    <p className="nav-con1-p">EthAi</p>
                </Link>
                <div className="nav-container2 col-6 justify-context-center">
                    <Link className="nav-con2-link" to="/features">
                        <p className="nav-con2-p">Features</p>
                    </Link>
                    <Link className="nav-con2-link" to="/why_us">
                        <p className="nav-con2-p">Why Us</p>
                    </Link>
                    <Link className="nav-con2-link" to="/tokenomics">
                        <p className="nav-con2-p">Tokenomics</p>
                    </Link>
                    <Link className="nav-con2-link" to="/roadmap">
                        <p className="nav-con2-p">Roadmap</p>
                    </Link>
                </div>
                <div className="nav-container3 justify-context-end">
                    <button className="nav-con3-btn1 btn">Log in</button>
                    <button className="nav-con3-btn2 btn">Whitepaper</button>
                </div>
            </nav>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark nav-container-mini">
                <Link class="navbar-brand" to="/">
                    <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png" alt="img1" className="nav-img-mini" />
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon bg-light"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link className="nav-link text-white" to="/features">
                            <p className="nav-con2-p">Features</p>
                        </Link>
                        <Link className="nav-link text-white" to="/why_us">
                            <p className="nav-con2-p">Why Us</p>
                        </Link>
                        <Link className="nav-link text-white" to="/tokenomics">
                            <p className="nav-con2-p">Tokenomics</p>
                        </Link>
                        <Link className="nav-link text-white" to="/roadmap">
                            <p className="nav-con2-p">Roadmap</p>
                        </Link>
                        <p className="text-white nav-con-mini-p">Log in</p>
                        <p className="text-white nav-con-mini-p">Whitepaper</p>
                    </div>
                </div>
            </nav>
        </div>
    </>
)

export default Header