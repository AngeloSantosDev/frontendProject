import { Route, Switch } from "wouter"
import Header from "./components/Header"
import Homepage from "./views/Homepage"
import TravelList from "./views/TravelList"
import TravelDetail from "./views/TravelDetail"
import Footer from "./components/Footer"
import Contacts from "./views/Contacts"
import TermsConditions from "./views/TermsConditions"

function App() {

  return (
    <>
      
      <Switch>
        <Route path="/" component={Homepage} />
        <Route path="/lista-viagens" component={TravelList} />
        <Route path="/lista-viagens/:slug" component={TravelDetail}/>
        <Route path="/contactos" component={Contacts} />
        <Route path="/termos-e-condicoes" component={TermsConditions}></Route>
      </Switch>
      <Footer/>
    </>
  )
}

export default App
