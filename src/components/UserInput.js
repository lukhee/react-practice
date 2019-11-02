import React from 'react'

const userInput = (props)=>{
    return(
        <div>
            <input type="text" onChange={props.inputValue} value={props.defaultName} />
        </div>
    )
}

export default userInput