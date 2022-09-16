import React from 'react'
import { Link } from "react-router-dom";
import "./Home.css";
import ETS2 from '../ETS2.jpg'

function Home() {
  return (
    <div className="home" style={{ backgroundColor: 'black' }}>
      <div className="headerContainer">
        <img src={ETS2}></img><br></br>
        <Link to="/Menu">
          <button> CHOOSE NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home