import {useState} from 'react';

function InputFields(){

const [field,setField]=useState();


let cleardata=()=>{
setField('');
}

    return(

        <>
        <h2>Get The Input Fields</h2>
        <input  type='text' value={field} placeholder='enter data' style={{height:'30px',width:'250px'} }
        onChange={(event)=>setField(event.target.value)}></input>
        <h3>{field}</h3>
        <button style={{color:'white',backgroundColor:'black'}} onClick={cleardata}>Clear All</button>
        </>
    );
}

export  default InputFields;
