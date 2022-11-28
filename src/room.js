import React, {useState} from 'react';
import './room.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Room() {
  let [islet,setlet]=useState(true);
  let [temp,setTemp]=useState(22);

    const ToogleLight=()=>{
      setlet(!islet);

    }

    return(

      <div className={`room ${islet ? "lit": "dark"}`}>
        <p> The Room is {islet ? "Lit": "Dark"}</p>
        <p>{islet?"Wake up its Morning": "Go to bed Its sleep time"}</p>
        <p>Temperature:{temp}</p>
        
        <br></br>
  
        <div className='btn-group-vertical'>
          <button type="button" className={`btn ${islet ? "btn-primary text-light": "btn-info text-dark"}`} onClick={ToogleLight}>{islet ? " Sleep " : " Wake Up "}</button>
          <button type="button" className={`btn ${islet ? "btn-success text-warning": "btn-warning text-dark"}`} onClick={ToogleLight}>{islet ? "Turn Off Lights" : "Turn On Lights"}</button>
          <button type="button" className={`btn ${islet ? "btn-outline-light": "btn-outline-dark"}`} onClick={ToogleLight}>Toggle Lights</button>
        </div>
        <br/>
        <div className='btn-group-vertical'>
          <button type="button" class="btn btn-danger" onClick={()=>setTemp(++temp)}>Increase Temp</button>
          <button type="button" class="btn btn-info" onClick={()=>setTemp(--temp)}>Decrease Temp</button>
        </div>  
      </div>

      

  );
}

export default Room;