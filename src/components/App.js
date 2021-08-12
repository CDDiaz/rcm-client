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
import Reservations from './Reservations';

import './css/Airlines.css'


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
            <li>
              <Link to="/Flights">Flights</Link>
            </li>
            <li>
              <Link to="/Reservations">Book</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/Airplanes">
            <Airplanes />
          </Route>
          <Route path="/Search">
            <Search />
          </Route>
          <Route path="/Flights">
            <AdminFlights />
          </Route>
          <Route path="/Reservations">
            <Reservations />
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
