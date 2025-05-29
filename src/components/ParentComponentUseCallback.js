import React, {useState, useCallback} from 'react'
import TitleUseCallback from './TitleUseCallback'
import CountUseCallback from './CountUseCallback'
import ButtonUseCallback from './ButtonUseCallback'

function ParentComponentUseCallback() {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)

    const incrementAge = useCallback(() =>{
        setAge(age + 1)
    }, [age])

    const incrementSalary = useCallback(() =>{
        setSalary(salary + 1000)
    }, [salary])
  return (
    <div>
        <TitleUseCallback />
        <CountUseCallback text="Age" count={age}/>
        <ButtonUseCallback handleClick={incrementAge}>Increment Age</ButtonUseCallback>
        <CountUseCallback text="Salary" count={salary}/>
        <ButtonUseCallback handleClick={incrementSalary}>Increment Salary</ButtonUseCallback>
    </div>
  )
}

export default ParentComponentUseCallback