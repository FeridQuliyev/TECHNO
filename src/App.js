import React from 'react'
import "../src/App.css"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Navbarmenu from './components/Navbarmenu/Navbarmenu'
import Helpdesk from './components/Helpdesk/Helpdesk'
import Network from './components/Network/Network'
import System from './components/System/System'
import Cloud from './components/Cloud/Cloud'
import Security from './components/Security/Security'
import Team from './components/Team/Team'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
import Section3 from './components/Section3/Section3'
import Section4 from './components/Section4/Section4'
import Servicepackages from './components/Servicepackages/Servicepackages'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop'
import ScrollTop from './components/ScrollTop/ScrollTop'
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbarmenu />
        <ScrollToTop/>
        <ScrollTop/>
          <Switch>
            <Route exact path="/">
              <Section1 />
              <Section2 />
              <Section3 />
              <Servicepackages/>
              <Section4/>
            </Route>
            <Route path="/helpdesk">
              <Helpdesk />
            </Route>
            <Route path="/network">
              <Network />
            </Route>
            <Route path="/system">
              <System />
            </Route>
            <Route path="/cloud">
              <Cloud />
            </Route>
            <Route path="/security">
              <Security />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/team">
              <Team />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
          <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App