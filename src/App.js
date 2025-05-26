
import React, {Component} from 'react'
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';


class App extends Component {

  render(){
    return (
    	<div className="App">
        <DataFetching/>
     	</div>
    );
  }
  
}

export default App;
