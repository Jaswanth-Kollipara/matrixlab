import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from "recharts"
import Header from "../Header"
import Footer from '../Footer'
import './index.css'


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

const Tokenomics = () =>(
    <div className="main-container">
        <Header />
        <div className="tokenomics">
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
        <Footer />
    </div>
)

export default Tokenomics