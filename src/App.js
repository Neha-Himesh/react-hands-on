
import React, {useReducer} from 'react'
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentCReducer from './components/ComponentCReducer';

export const countContext = React.createContext()

const initialState = 0
const reducer = (state, action) =>{
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <countContext.Provider value={{countState: count, countDispatch: dispatch}}>
    <div className='App'>
      Count - {count}
      <ComponentA />
      <ComponentB />
      <ComponentCReducer />
    </div>
    </countContext.Provider>
  )
}

export default App;


// class App extends Component {

//   render(){
//     return (
//     	<div className="App">
//         <CounterTwo />
//      	</div>
//     );
//   }
  
// }


