import React from 'react'
import './Signup.css'
export default function Signup() {
  const outline={
    position: "middle",
    width: "400px",
    border:'1px solid black',
    margin:'auto',
    boxshadow:'2px 1px 3px 3px black',
    color:'black',
    frontsize:'Tw Cen Mt',
    frontsize:20
  }
  
const ts={
    margintop:'100px',
    position:'middle',
    color:"black"
  }
  
  
    return (
      <div className='background'>
      <div style={outline}>
        <div style={ts}>
        <div style={{backgroundColor: "violet"}}>
        <center> Sign up</center>
        <form>
          Name:
	        <input type="text" write/><br/><br/>
          Phone no:
	        <input type="text" write/><br/><br/>
          Email:
	        <input type="text" write/><br/><br/>
          Set Password:
	        <input type="text" write/><br/><br/>
          Confirm Password:
          <input type="text" write/><br/><br/>
          </form>
	      </div>
     </div>
     </div>
     </div>
    );
  }
  
