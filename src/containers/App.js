import '../styles/App.css'
import Home from '../components/Home'
import About from '../components/About'
import Footer from '../components/Footer'
import  { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      
      <Switch>
        <Route path='/about' exact component={About} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
