import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import DropRateCalc from './components/DropRateCalc'
import HomeScreen from './screens/HomeScreen'
import AdminHomeScreen from './screens/AdminHomeScreen'
import RegisterScreen from './screens/RegisterScreen'
import LoginScreen from './screens/LoginScreen'
import About from './screens/About'
import RateCalc from './components/RateCalc'

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          
          <Route path="/" component={HomeScreen} exact/>
          <Route path="/home" component={HomeScreen} exact/>
          {/* <Route path="/*" component={HomeScreen} /> */}
          <Route path="/5678/adminhome" component={AdminHomeScreen} />
          <Route path="/about" component={About} />

          {/* <Route path="/folders/:id" component={About} /> */}

          <Route path="/register" component={RegisterScreen} />
          <Route path="/login" component={LoginScreen} />

          <Route path="/dropcalc" component={DropRateCalc} />
          <Route path="/ratecalc" component={RateCalc} />

        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
