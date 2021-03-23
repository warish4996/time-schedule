import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

const Time = () => {
  let time = ['9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm']
  const data = useSelector((state) => state.reducer.data) || [];
  let selectedTime = data.map(res => res.time)
  return (
    <div className='timePageSpace'>
      <h6>Avialable time</h6>
      {time.map((res, i) =>
        selectedTime.indexOf(res) === -1 ?
          <Link key={i} to={{ pathname: '/info-page', query: { onTime: res } }}>
            <Button className='slots' variant="outline-primary"  >{res}</Button>
          </Link> :
          <Link key={i} to={{ pathname: '/info-page', query: { onTime: res } }}>
            <Button className='slots' variant="primary"  >{res}</Button>
          </Link>
      )}

      {/* used inline styling because i have to provied it to control card width */}

      <Card style={{ width: '36.5rem', marginTop: '15px' }}>
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">Instuction before scheduling your time</Card.Subtitle>
          <Card.Text>
           1. You can schedule your time by clicking on time slot is avialable.<br/>
           2. When you done the process the page is redirected to the same page you are in write now
              and your slected time color will be filled with blue color which shows that this time is now occupied.<br/>
           3. You can still check your detail by clicking on same time you scheduled and also you can edit it if you want some changes.<br/>
           4. Also you can schedule other time.<br/>
           5. For canceling a schedule you have to click on same slot you schedule and page will redirected to the 
              edit page then click on cancel button.  
    </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};


export default Time