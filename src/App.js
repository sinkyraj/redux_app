
import './App.css';
import {
  Switch,
  Route, BrowserRouter as Router } from 'react-router-dom'

import { HomePage } from "./containers/HomePage"
// import { UserPage } from "./containers/UserPage"

function App() {
  return (
    <>
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/">
          <HomePage />
          </Route>
          {/* <Route>
            <UserPage />
          </Route> */}
          <Route>
            404 Not Found
          </Route>

      </Switch>
    </div>
      </Router>
    </>
  );
}

export default App;
