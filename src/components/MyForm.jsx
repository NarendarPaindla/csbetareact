import React, { useState } from 'react';

function MyForm(){
    const [name,setName]=useState("");
    const handleSubmit=(event)=>{
        event.preventDefault();
        alert(`The name you entered was: ${name}`);
    }
    return(
    <form onSubmit={handleSubmit}>
        <label>Enter your Name
   <input
   type="text"
   value={name}
   onChange={(event)=>setName(event.target.value)}
   />

        </label>
        <input type="submit"/>
    </form>
    )
}
export default MyForm;