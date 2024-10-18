import React, { useState } from 'react'
// import { CustomButton } from './CustomComponents';

export default function TextForm(props) {

const [task,setTask] = useState ('');

const handleUpClick = () => {
    let upperCase = task.toUpperCase()
    setTask(upperCase)
}

const handleLoClick = () => {
  let lowerCase = task.toLowerCase()
  setTask(lowerCase)
}

const handleReverseClick = () => {
  let reversedText = task.split('').reverse().join('');
  setTask(reversedText);
}

const handleClearClick = () => {
  let clearText = ''
  setTask(clearText)
}

const handleOnChange = (e) => {
    setTask(e.target.value)
  };

const handleSubmit=()=>{
    alert('submit called!!')
}

  return (
    <>
    <div className='container'>
    <h1>{props.heading}</h1>
    <div className="mb-3">
      <textarea className="form-control" value={task} onChange={handleOnChange} id="exampleFormControlTextarea1" rows={8}/>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}> Convert to Uppercase </button>
    <button className="btn btn-secondary mx-2" onClick={handleLoClick}> Convert to Lowercase </button>
    <button className="btn btn-success mx-2" onClick={handleReverseClick}> Convert to Reversed </button>
    <button className="btn btn-danger mx-2" onClick={handleClearClick}> Clear Text </button>
  </div>
    <div className='container my-2'>
        <h2>Your Text Summary</h2>
        <p>{task.split(" ").length} Words :: {task.length} characters </p>
        <p>{0.008 * task.split(" ").length} Minutes Read </p>
        <h2>preview</h2>
        <p>{task}</p>
    </div>
    {/* <CustomButton handleClick={handleSubmit} text={'Login'} /> */}
    </>
);
}