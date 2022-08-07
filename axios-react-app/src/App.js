
import { Component } from 'react';
import './App.css';
import Beers from './Beers';

  class App extends Component {
    render() {
      return (
        <div className='App'>
          <Beers/>
        </div>
      )
       
    }
  }
  
  export default Beers;