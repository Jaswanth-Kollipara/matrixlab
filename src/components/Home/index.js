import Header from "../Header"
import Footer from "../Footer"
import './index.css'

const Home = () => (
    <div className="main-container">
        <Header />
        <div id="home-section" className="home-section">
            <h1 className="home-h1">When Innovation <br /> Meets <span className="home-sp">Investment</span></h1>
            <p className="home-p">Empowering Trading Though Advanced Technology</p>
            <button className="home-btn btn">Open dApp</button>
        </div>
        <Footer />
    </div>
  )
  
export default Home