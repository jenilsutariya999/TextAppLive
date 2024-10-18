// 
import React from 'react'

export default function Test_hook() {
  function greet(name) {
    console.log(`Hi ${name}, how do you do?`);
}

function displayGreeting(callback) {
    let name = prompt("Please enter your name");
    callback(name);
};


console.log(displayGreeting(greet))
  return (
    <div>
      
    </div>
  )
}
