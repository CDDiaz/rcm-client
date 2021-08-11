import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Airplanes from './Airplanes'
import Search from './Search';
import AdminFlights from './AdminFlights';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/airplanes">Airplanes</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
<<<<<<< HEAD
=======
            <li>
              <Link to="/Flights">Flights</Link>
            </li>
>>>>>>> a1c059e6fe9bf301f7e68e3761365ecbe8f7c342
          </ul>
        </nav>

        <Switch>
          <Route path="/Airplanes">
            <Airplanes />
          </Route>
          <Route path="/Search">
            <Search />
          </Route>

          <Route path="/Search">
            <Search />
          </Route>

          <Route path="/Flights">
            <AdminFlights />
          </Route>


        </Switch>
      </div>
    </Router>
  );
}

function Home() {

    return (
      <h2>Home</h2>
    )


}
