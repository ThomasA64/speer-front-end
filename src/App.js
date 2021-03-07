import { BrowserRouter, Route, Switch } from "react-router-dom";

import MainPage from "./components/Mainpage";
import Nav from "./components/Nav";
import Pricing from "./components/Pricing";
import Burger from "./components/Burger";
import Music from "./components/Music";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/mainpage.css";
import "./styles/allstyles.css";
import "./styles/button.scss";
import "./styles/nav.css";
import "./styles/pricing.css";
import "./styles/burger.css";
import "./styles/music.css";

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
              <Music></Music>
              <Music></Music>
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
        <Route path="/burger" render={() => <></>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
