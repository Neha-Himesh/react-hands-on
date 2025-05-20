import logo from './logo.svg';
import React, {Component} from 'react'
import './App.css';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import Hero from './Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';


class App extends Component {

  render(){
    return (
    	<div className="App">
			<ClickCounter name='Neha'/>
			<HoverCounter/>
     	</div>
    );
  }
  
}

export default App;
