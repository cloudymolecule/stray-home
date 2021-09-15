import '../styles/App.css'
import Home from '../components/Home'
import About from '../components/About'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import  { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/cat-adoption' exact component={About} />
        <Route path='/dog-adoption' exact component={About} />
        <Route path='/rehome' exact component={About} />
        <Route path='/shelters' exact component={About} />
        <Route path='/account' exact component={About} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
