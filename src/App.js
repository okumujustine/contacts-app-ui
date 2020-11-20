import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { routes } from "./routes";
import { GlobalProvider } from "./context/Provider";
import isAuthenticate from "./utils/isAuthenticated";

const RenderRoute = (route) => {
  const history = useHistory();

  if (route.needsAuth && !isAuthenticate()) {
    history.push("/auth/login");
  }

  return (
    <Route
      path={route.path}
      exact
      render={(props) => <route.component {...props} />}
    ></Route>
  );
};

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Switch>
          {routes.map((route, index) => (
            <RenderRoute {...route} key={index} />
          ))}
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
