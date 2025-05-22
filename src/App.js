import logo from './logo.svg';
import React, {Component} from 'react'
import './App.css';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import Hero from './Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import PortalDemo from './components/PortalDemo';


class App extends Component {

  render(){
    return (
    	<div className="App">
        <PortalDemo />
     	</div>
    );
  }
  
}

export default App;
