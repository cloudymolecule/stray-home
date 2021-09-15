import '../styles/App.css'
import Home from '../components/Home'
import About from '../components/About'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Account from '../components/Account'
import Cats from '../components/Cats'
import Dogs from '../components/Dogs'
import Rehome from '../components/Rehome'
import Shelters from '../components/Shelters'
import  { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/cat-adoption' exact component={Cats} />
        <Route path='/dog-adoption' exact component={Dogs} />
        <Route path='/rehome' exact component={Rehome} />
        <Route path='/shelters' exact component={Shelters} />
        <Route path='/account' exact component={Account} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
