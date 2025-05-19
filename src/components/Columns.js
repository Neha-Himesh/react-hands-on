import React from 'react'

function Columns() {
    const items = [
        {
            id: 1,
            title: 'first',
        },
        {
            id: 2,
            title: 'second',
        }
    ]
  return (
        <React.Fragment>
            {items.map(item =>(
                <React.Fragment key ={item.id}>
                    <b>Title</b>
                    <p>{item.title}</p>
                </React.Fragment>
            ))
            }
            <td>
                Name
            </td>
            <td>
                Neha
            </td>
        </React.Fragment>
            
  )
}

export default Columns