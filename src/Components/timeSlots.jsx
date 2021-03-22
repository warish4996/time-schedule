import React from "react";
import { Button } from "react-bootstrap";
import {Link} from 'react-router-dom'; 
import { useSelector } from "react-redux";

const Time = () => {
    let time =['9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm']
    const data =useSelector((state) => state.reducer.data) || [];
    let selectedTime = data.map(res=>res.time)
  return (
    <div className='timePageSpace'>
        <h6>Avialable time</h6>
    {time.map((res,i)=>
    selectedTime.indexOf( res ) === -1 ?
    <Link key={i} to={{ pathname: '/info-page', query: { onTime: res } }}>
    <Button className='slots' variant="outline-primary"  >{res}</Button> 
    </Link> :
    <Link key={i} to={{ pathname: '/info-page', query: { onTime: res } }}>
    <Button className='slots' variant="primary"  >{res}</Button> 
    </Link> 
    )} 
    </div>
  );
};


export default Time