import React from 'react'
import './Person.css'

const person = (props) =>{
    return(
        <div className="personDiv">
            <h3> i am {props.name} from person component folder, i am {props.age} years old </h3>
            <p onClick={props.click}> i am passing a child property too with " {props.children} content"</p>
            <input type="text" onChange={props.change}  />
        </div>
    )
}

export default person