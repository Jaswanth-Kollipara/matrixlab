import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Features from './components/Features'
import WhyUs from './components/WhyUs'
import Tokenomics from './components/Tokenomics'
import Roadmap from './components/Roadmap'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/matrixlab/" component={Home} />
    <Route exact path="/features" component={Features} />
    <Route exact path="/why_us" component={WhyUs} />
    <Route exact path="/tokenomics" component={Tokenomics} />
    <Route exact path="/roadmap" component={Roadmap} />
    <Route component={NotFound} />
  </Switch>
)

export default App