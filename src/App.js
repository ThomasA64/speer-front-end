import { BrowserRouter, Route, Switch } from "react-router-dom";

//Components
import Nav from "./components/Nav";
import Pricing from "./components/Pricing";
import Music from "./components/Music";
import Hero from "./components/Hero";
import Perks from "./components/Perks";
import Footer from "./components/Footer";
import FrontRow from "./components/FrontRow";
import PerksMain from "./components/PerksMain";
import Reviews from "./components/Reviews";
import GetNow from "./components/GetNow";

//Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/mainpage.css";
import "./styles/allstyles.css";
import "./styles/button.scss";
import "./styles/nav.css";
import "./styles/pricing.css";
import "./styles/burger.css";
import "./styles/music.css";
import "./styles/footer.css";
import "./styles/stack.css";

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
              <Hero></Hero>
              <Music></Music>
              <FrontRow></FrontRow>
              <PerksMain></PerksMain>
              <Reviews></Reviews>
              <GetNow></GetNow>
              <Footer></Footer>
            </>
          )}
        />
        <Route
          path="/pricing"
          render={() => (
            <>
              <Pricing></Pricing>
              <Perks></Perks>
              <Footer></Footer>
            </>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
