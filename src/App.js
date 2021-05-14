import "./assets/sass/_normalize.scss";
import "./assets/sass/_typography.scss";
import { React } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./themes/theme";
import Header from "./parts/Navbar";
import test from "./pages/test";
import Home from "./pages/Home";
import Office from "./pages/Office";


const App = () => {
  const appliedTheme = theme;

  return (
    <BrowserRouter>
      <ThemeProvider theme={appliedTheme}>
        <div className="App">
          <Switch>
            <Route
              path="/"
              render={() => (
                <>
                  <Header />
                  <main>
                    <Switch>
                      <Route path="/" exact component={Home} />
                      <Route path="/test" exact component={test} />
                      <Route path="/office" exact component={Office} />
                    </Switch>
                  </main>
                </>
              )}
            />
          </Switch>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
