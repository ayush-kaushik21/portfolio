import './App.css'
import Navbar from './Components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Introduction from './Components/Introduction'
import Footer from './Components/Footer'
import { Route, Switch } from 'react-router'
import Resume from './Components/Resume'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import Error404 from './Components/Error404'

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Introduction />
        </Route>
        <Route exact path='/resume'>
          <Resume />
        </Route>
        <Route exact path='/skills'>
          <Skills />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
        <Route path='*'>
          <Error404 />
        </Route>
      </Switch>
      <Footer />
    </>
  )
}

export default App
