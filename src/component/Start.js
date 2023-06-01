import React ,{ useRef } from "react";



export default function Start({setUsername}){

    // console.log(setUserName);

    const inputRef = useRef();

    const handleClick = () =>{
        inputRef.current.value && setUsername(inputRef.current.value);
    }

    return (
          <div className="start">
            <input className="startInput" placeholder="enter your name" ref={inputRef }/>
            <button className="startButton" onClick = { handleClick }>start</button>

          </div>
    )
};