
import React, {Component} from 'react'
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';
import ComponentC from './components/ComponentC';
import ComponentCFunc from './components/ComponentCFunc';


export const UserContext = React.createContext()

export const ChannelContext = React.createContext()

class App extends Component {

  render(){
    return (
    	<div className="App">
        <UserContext.Provider value={'Neha'}>
          <ChannelContext.Provider value={'Codevolution'}>
            <ComponentCFunc />
          </ChannelContext.Provider>
          </UserContext.Provider>
     	</div>
    );
  }
  
}

export default App;
