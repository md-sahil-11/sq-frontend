import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Tables from "./pages/Tables";
import Billing from "./pages/Billing";
import Rtl from "./pages/Rtl";
import Profile from "./pages/Profile";
import Main from "./components/layout/Main";
import Project from "./components/ajax/pages/Projects";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import AjaxDashboard from "./components/ajax/AjaxDashboard";
import CaseStudies from "./components/ajax/pages/CaseStudies";
import WorkSpace from "./components/ajax/pages/WorkSpace.js";
import Services from "./components/ajax/pages/Services";
import Social from "./components/ajax/pages/Social";
import Transaction from "./components/ajax/pages/Transaction";
import Tasks from "./components/ajax/pages/Tasks";
import SignIn from "./components/ajax/components/SignIn";
import SignUp from "./components/ajax/components/SignUp";
import CreateWorkSpace from "./components/ajax/pages/CreateWorkSpace";
import CreateService from "./components/ajax/components/CreateService";



function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/sign-in" exact component={SignIn} />
        <Route path="/casestudies" exact component={CaseStudies} />
        <Route exact path="/workspace" component={WorkSpace} />
        <Route exact path="/services/:workspaceid" component={Services} />
        <Route exact path="/create-workspace" component={CreateWorkSpace}/>
        <Route exact path="/createservice" component={CreateService}/>
        <AjaxDashboard>
          <Route exact path="/social" component={Social} />
          <Route exact path="/projects" component={Project} />
          <Route exact path="/transactions" component={Transaction}></Route>
          <Route exact path="/tasks" component={Tasks}></Route>
        </AjaxDashboard>
        {/* <Main>
          <Route exact path="/dashboard" component={Home} />
          <Route exact path="/tables" component={Tables} />
          <Route exact path="/billing" component={Billing} />
          <Route exact path="/rtl" component={Rtl} />
          <Route exact path="/profile" component={Profile} />
          <Redirect from="*" to="/dashboard" />
        </Main> */}
      </Switch>
    </div>
  );
}

export default App;
