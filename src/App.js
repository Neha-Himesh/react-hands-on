
import React, {Component} from 'react'
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';

export const countContext = React.createContext()

class App extends Component {

  render(){
    return (
    	<div className="App">
        <CounterTwo />
     	</div>
    );
  }
  
}

export default App;
