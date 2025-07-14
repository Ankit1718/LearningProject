import { useState } from 'react';
import Clock from './Clock';

function DropdownClock(){

      const [clockval,setClockval]=useState('green');
      
    return(

<>
      
    <h3>Default Props in React Js</h3>
    <select value={clockval} onChange={(e) => setClockval(e.target.value)}  style={{width:'200px',height:'40px',textAlign:'center'}}>
    <option value="green">Green</option>
     <option value="blue">Blue</option>
      <option value="red" >Red</option>
     </select>

 <Clock colour={clockval} />
        </>
        
    )
}

export default DropdownClock;