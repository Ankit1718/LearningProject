import { useState ,useEffect } from "react";

function Clock({colour='green'}){

    const[time,setTime]=useState(getCurrentTime());

    const[checkcolor,setCheckColor]=useState();


 
  useEffect(() => {
    // run every time `colour` changes
    switch (colour.toLowerCase()) {          
      case "green":
        setCheckColor({width:'300px',
      height:'140px',
        backgroundColor:'green',
        border:'1px solid yellow',
        borderRadius:'10px'});
        break;
      case "blue":
        setCheckColor({width:'300px',
      height:'140px',
        backgroundColor:'blue',
        border:'1px solid yellow',
        borderRadius:'10px'});
        break;
      default:
        setCheckColor({width:'300px',
      height:'140px',
        backgroundColor:'red',
        border:'1px solid yellow',
        borderRadius:'10px'});
    }
  }, [colour]);

 function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString('en-GB'); 
  }

 
    
    return(

        <>
        <br/>
        <br/>
      <div style={checkcolor}>
          
<h3 style={{color:'black',textAlign:'center',paddingTop:'25px'}}>{time}</h3>
        </div>

        
        </>
    )
}

export default Clock;