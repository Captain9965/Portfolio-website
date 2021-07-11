import { BrowserRouter,Switch, Route } from "react-router-dom";
//components
import Homepage from "./components/Homepage";
import Menu from "./components/Menu";
//Pages
import Projects from "./pages/projects";
import Error from "./pages/Error";
import Contacts from "./pages/Contacts";

const App=() =>{
  return ( 
    <BrowserRouter>
      <Menu />   
      <Switch>
      <Route
      path="/"
      exact={true}
      >
        
        <Homepage />
      </Route>
      <Route
      path="/Projects"
      exact
      >
        <Projects />
      </Route>
      <Route
      path="/contact-me"
      exact
      >
        <Contacts />
      </Route>
      <Route
      path="*"
      >
        <Error />
      </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
