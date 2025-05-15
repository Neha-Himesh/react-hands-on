import logo from './logo.svg';
import React, {Component} from 'react'
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';

class App extends Component {

  render(){
    return (
      <div className="App">
        <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1>
       {/* <Greet name="Neha"/>
        <p> This is children</p>
       <Welcome name="Vaishnavi"/>
       <Welcome name="Samhitha" /> */}
       {/* <Hello />
       <Message /> 
       <Counter /> */}
       {/* <FunctionClick />
       <ClassClick /> */}
       {/* <EventBind />
       <ParentComponent /> */}
       {/* <NameList /> */}
       {/* <Stylesheet primary={true} /> */}
       <Inline />
      </div>
    );
  }
  
}

export default App;
