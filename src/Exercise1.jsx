import gokarna from './assets/viratkohli.jpg';
import { useState } from 'react';
import{Button} from '@mui/material';
import { Switch, FormControlLabel } from '@mui/material';
import ExerciseProps from './ExerciseProps';
import InputFields from './InputFields';
import axios from 'axios';
import DropdownClock from './DropdownClock';
import Clock from './Clock';

export function Exercise1() {
   const [ab, setAb] = useState('');
   const [data, setData] = useState([]); 
   const[toogle, setToogle]=useState(false);
   const [checked, setChecked] = useState(0);
   const [btn,setbtn]=useState();

  const alertmsg = async () => {
    try {
     
      setData([]);
      setAb("Loading...........");
      
      const response = await axios.get('/CenturiesData.json');
      //await new Promise(resolve => setTimeout(resolve, 1000));
      const json = (response.data)
     
      setData(json); // entire array
    } catch (err) {
      setData([{ error: "Error loading data" }]);
    }
    setAb(" ");
  };

  const handleToggle = () => {
    setToogle(ab=>!ab);
  };

let obj = {names:'Virat',age:'37',email:'virat@test.com'};

  return (
    <div style={{ background: '#abc0d2', display: 'flex', padding: '20px' }}>
      
      {/* Left Side */}
      <div style={{ textAlign: 'left', width: '50%' }}>
        <h1><strong>VIRAT KOHLI</strong></h1>
        <img src={gokarna} alt="Boss!" style={{width: '300px', borderRadius: '8px',display: 'block',
        marginBottom: '20px'
          }}
        />
        <ul style={{ fontSize: '16px' }}>
          <li>A modern icon of Indian sports and a global face of cricket.</li>
          <li>One of the fastest batsmen to reach 8,000, 9,000, 10,000, 11,000 and 12,000 runs in ODI cricket.</li>
          <li>Most centuries in ODIs. </li>
          
        </ul>
        <br />
        <button
          onClick={alertmsg}
          style={{
            marginTop: '10px',
            padding: '8px 16px',
            cursor: 'pointer',
            border: '1px solid Black'
          }}
        >
          Check Centuries!
        </button>
<div style={{marginTop:'15px'}}></div>

{data.length > 0 && !data[0]?.error && (
<table style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th style={{ border: '1px solid black' }}>CenturyNo</th>
      <th style={{ border: '1px solid black' }}>GroundName</th>
      <th style={{ border: '1px solid black' }}>City</th>
      <th style={{ border: '1px solid black' }}>Score</th>
    </tr>
  </thead>
  <tbody>
    
    {data.map((item)=>(
<tr key={item.Id}>
  <td style={{ border: '1px solid green' }}>{item.CenturyNo}</td>
  <td style={{ border: '1px solid green' }}>{item.GroundName}</td>
  <td style={{ border: '1px solid green' }}>{item.City}</td>
  <td style={{ border: '1px solid green' }}>{item.Score}</td>
</tr>
    ))}
   
  </tbody>
</table>

  )}
      </div>

      {/* Right Side - All Records */}
      <div style={{ width: '50%', textAlign: 'left', paddingLeft: '20px' }}>
        <h1>All Centuries Records</h1>

        
        {ab && (
          <h3 style={{ color: '#169013', marginTop: '10px' }}>
            <strong>{ab}</strong>
          </h3>
        )}

       
        {data.length > 0 && !data[0].error ? (
          <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
            <ul>
              {data.map((item) => (
                <li key={item.id} style={{ marginBottom: '10px' }}>
                  <strong>CenturyNo:</strong> {item.CenturyNo}, <strong>Name:</strong> {item.GroundName}, <strong>City:</strong> {item.City}, <strong>Score:</strong> {item.Score}
                </li>
              ))}
            </ul>
          </div>
        ) : data[0]?.error ? (
          <h3 style={{ color: 'red' }}>{data[0].error}</h3>
        ) : null}

      <h2 style={{textAlign:'left'}}> Here is Toggle Activity</h2>
      
      

       <Button  variant="contained"
      color={toogle ? "success" : "secondary"}
       onClick={handleToggle}>
      {toogle ? 'ON'  : 'OFF'}
    </Button>

<br/>

    <FormControlLabel
      control={
        <Switch
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          color="primary"
        />
      }
      label={checked ? "Enabled" : "Disabled"}
    />


<ExerciseProps objectt={obj}/>

{/* <InputFields/> */}

<DropdownClock/>
<br/>
<br/>




      </div>
    </div>
  );
}
