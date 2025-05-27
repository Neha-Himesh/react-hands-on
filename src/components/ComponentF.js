import React, { Component, useContext } from 'react'
import { UserConsumer } from './userContext'
import { UserContext, ChannelContext } from '../App'

class ComponentF extends Component {
  render() {
    return (
      <UserConsumer>
        {
            username =>{
                return <div> Hello {username}</div>
            }
        }
      </UserConsumer>
    )
  }
}

export default ComponentF