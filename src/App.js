import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import CountriesList from './components/CountriesList';
import countries from './countries.json';
import './App.css';

class App extends Component {
  getBorders = country => {
    const countryBorders = country.borders;
    return countryBorders.map((coun, index) => {
      const border = countries.find(country => country.cca3 === coun);
      return (
        <li key={`${index + 1}-country--listItem`}>
          <NavLink to={`/country/${border.cca3}`}>{border.name.common}</NavLink>
        </li>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Switch>
            <Route
              exact
              path="/country/:id"
              render={props => (
                <CountryDetails
                  {...props}
                  countries={countries}
                  getBorders={this.getBorders}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;