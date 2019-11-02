import React from 'react'
import UserInput from './UserInput'
import './Person.css'

const userOutput = (props)=>{
    return(
        <div className="personDiv">
            <div>
                <label>Name : </label> <span>{props.name}</span>
            </div>
            <div>
                <label>Position : </label> <span>{props.position}</span>
            </div>
            <UserInput inputValue= {props.click} defaultName={props.name}/>
        </div>
    )
}

export default userOutput