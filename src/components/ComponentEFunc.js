import React, {useContext} from 'react'
import { UserContext, ChannelContext } from '../App'
import ComponentFFunc from './ComponentFFunc'

function ComponentEFunc() {
    const user= useContext(UserContext)
    const channel = useContext(ChannelContext)
  return (
    <div>
        {user} - {channel}
    </div>
  )
}

export default ComponentEFunc