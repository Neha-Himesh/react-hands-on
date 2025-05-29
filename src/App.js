
import React from 'react'
import FocusInputUseRef from './components/FocusInputUseRef';
import ClassTimer from './components/ClassTimer';
import HookTimer from './components/HookTimer';
import DocTitleOne from './components/DocTitleOne';
import DocTitleTwo from './components/DocTitleTwo';
import CounterOneCustomHook2 from './components/CounterOneCustomHook2';
import CounterTwoCustomHook2 from './components/CounterTwoCustomHook2';


function App() {
  return (
    <div className="App">
      <CounterOneCustomHook2 />
      <CounterTwoCustomHook2 />
    </div>
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


