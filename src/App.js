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
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import CounterRenderProps from './components/CounterRenderProps';


class App extends Component {

  render(){
    return (
    	<div className="App">
        <CounterRenderProps render={(count, incrementCount) => (<ClickCounterTwo count={count} incrementCount={incrementCount} /> )} />
        <CounterRenderProps render={(count, incrementCount) => (<HoverCounterTwo count={count} incrementCount={incrementCount} /> )} />
     	</div>
    );
  }
  
}

export default App;
