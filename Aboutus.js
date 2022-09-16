import React from 'react'
import './Aboutus.css'
import sudhiksha from '../sudhiksha.jpg'
import Yasaswi from '../Yasaswi.jpg'
function Aboutus() {
  return (
    <div className="About">
      <div className="colour">
        TEAM MEMBERS
        <hr/>
        <img src={sudhiksha} alt="Sudhiksha" width="200" height="250"></img>
        <img src={Yasaswi} alt="Yasaswi" width="200" height="250"></img>
      <h5 position="center">Sudhiksha</h5>
      <h5 position="right">Yasaswi</h5>
      <br></br>
      <center> 
      <b>Entertainment Management System </b><br/>
      <i>Entertainment Management System is a website in which you can book and manage events, band, catering services and venue
      all at the same time. It's been always very difficult to plan and arrange all the events in a organized way, so this
      website provides you an effortless way of managing events. This is a user-friendly website which can be operated very 
      easily. This website has been designed based on the analysis of the field survey and according to the user requirements.<br></br>
      </i></center>
      <center>
        <br/> <b>SIGNIFICANCE</b><br/>
      <i>Entertainment Management System plays a vital role in managing and booking the events, band and catering services for
      all the users without any complication. It helps users to easily navigate through all the phases of the website. It 
      allows the customers to book their events, catering, band and all other entertainment programs in an efficient way. 
      User can be able to select the venue of the event of their desired choice. It also provides you with band and catering
      services, which gives you a trouble-free work.
      <br/>
      <br/>
      We team "BSY" had done this project which facilitates user to navigate through all the functionalities 
      <br/>in the website int a simple manner</i>
      </center>
      </div>
    </div>
  )
}

export default Aboutus