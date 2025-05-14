import React, {Component} from 'react'

class Welcome extends Component{
    render() {
        const {name} = this.props
        const {state1, state2} = this.state
        return <h1>Class Component Welcome {name}</h1>
    }
}

export default Welcome