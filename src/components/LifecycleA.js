import React, { Component } from 'react'
import LifecycleB from './LifeCycleB'

class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Neha'
      }
      console.log("LifecycleA constructor")
    }
    static getDerivedStateFromProps(props, state){
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifeCycleA componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('LifeCycleA ShouldComponentUpdate ')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifeCycleA getSnapshotBeforeUpdate ')
        return null
    }
    componentDidUpdate(){
        console.log('LifeCycleA componentDidUpdate')
    }
    changeState = () =>{
       this.setState({name: 'CodeEvolution'}) 
    }
  render() {
    console.log('LifecycleA render')
    return (
        <div>
            <LifecycleB />
            <div>LifecycleA</div>
            <button onClick={this.changeState}> Change State </button>
        </div>
       
    )
  }
}

export default LifecycleA