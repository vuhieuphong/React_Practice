import React,{useState,useCallback} from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'


function ParentComp() {
    const [age,setAge]=useState(21)
    const [salary,setSalary]=useState(1000)

    const incrementAge=useCallback(
        ()=>{
        setAge(prevAge=>prevAge+1)
    },[age])
    
    const incrementSalary=useCallback(
        ()=>{
        setSalary(prevSalary=>prevSalary+1000)
    },[salary])

    return (
        <div>
            <Title></Title>
            <Count text="Age" count={age}></Count>
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count text="Age" count={salary}></Count>
            <Button handleClick={incrementSalary}>Increment Salary</Button>
        </div>
    )
}

export default ParentComp
