import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./components/Mainpage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/mainpage.css";
import "./styles/allstyles.css";
import "./styles/button.scss";

function App() {
  return (
    <BrowserRouter>
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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
