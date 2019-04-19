import React, { Component } from 'react';
import './App.css';
import NavMenu from './components/Menu';
import Tasks from './components/Tasks';
class App extends Component {

  render() {
    return (
      <div className="App">
          <NavMenu/>
          <div className="container">
            <div className="row mb-5 pt-2">
                <h1> Emergency Light Stats</h1>
            </div>
            <div className="row">
                <Tasks/>
            </div>
          </div>

          <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
          <script src="https://unpkg.com/react/umd/react.production.min.js"></script>
          <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script>
          <script src="https://unpkg.com/prop-types/prop-types.min.js"></script>
          <script src="https://unpkg.com/recharts/umd/Recharts.min.js"></script>
      </div>
    );
  }
}

export default App;
