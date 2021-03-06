import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./components/Mainpage";
import Nav from "./components/Nav";
import Pricing from "./components/Pricing";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/mainpage.css";
import "./styles/allstyles.css";
import "./styles/button.scss";
import "./styles/nav.css";
import "./styles/pricing.css";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <>
              <MainPage></MainPage>
            </>
          )}
        />
        <Route
          path="/pricing"
          render={() => (
            <>
              <Pricing></Pricing>
            </>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
