import React, { useState,useEffect } from "react";
import { Form, Button, Col, Card, Row, Spinner, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { saveData, cancelData } from "../Store/Action/mainAction";
import {useLocation,useHistory} from "react-router-dom"

function Handleform(){
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [loding, setLoding] = useState(false);
  const [phone, setPhone] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [validEmailError, setValidEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [particularData, setParticularData] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const data =useSelector((state) => state.reducer.data) || [];
  let selectedTime

  useEffect (async()=>{
    let time = location.query && location.query.onTime
    selectedTime = await data.filter(res=>res.time == time)
    if(selectedTime.length > 0){
    setParticularData(selectedTime[0])
    setFirstName(selectedTime[0].firstName)
    setLastName(selectedTime[0].lastName)
    setEmail(selectedTime[0].email)
    setPhone(selectedTime[0].phone)
  }
  },[])

  const isEmail = (email) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validateForm = () => {
    if (!firstName) {
      setFirstNameError(true);
      return false;
    } else if (!lastName) {
      setLastNameError(true);
      return false;
    } else if (!email) {
      setEmailError(true);
      return false;
    } else if (!isEmail(email)) {
      setValidEmailError(true);
      return false;
    } else if (!phone) {
      setPhoneError(true);
      return false;
    } else {
      return true;
    }
  };

  const handleForm = () => {
    setFirstNameError(false);
    setLastNameError(false);
    setEmailError(false);
    setValidEmailError(false);
    setPhoneError(false);
    if (validateForm()) {
      const payload = {
        firstName: firstName,
        lastName:lastName,
        email: email,
        phone: phone,
        time:location.query && location.query.onTime
      };
      dispatch(saveData(payload, callBackConfirmation));
      setLoding(true);
    }
  };

  const callBackConfirmation = (response) => {
    if (response && response === 'success') {
      alert("time successful scheduled!")
      setLoding(false);
      history.push("/main-page");
    } else {
      setLoding(false);
        alert("Something went wrong!")
    }
  };

  const cancelForm = () =>{
    history.push("/main-page");
    if(particularData)
    dispatch(cancelData(location.query && location.query.onTime))
  }

  return (
    <div className="formCard">
      <Card style={{ width: "60rem" }}>
        <Card.Body>
        {particularData ? <Card.Title>Edit Form</Card.Title>
        : <Card.Title>Form</Card.Title>}
            <Form>
              <Row>
                <Col>
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  {firstNameError && (
                    <Alert variant="danger">First name is required!</Alert>
                  )}
                </Col>
                <Col>
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    placeholder="Last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  {lastNameError && (
                    <Alert variant="danger">Last name is required!</Alert>
                  )}
                </Col>
              </Row>
            </Form>
            <Form>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
              {(emailError || validEmailError) && (
                <Alert variant="danger">Invalid Email!</Alert>
              )}
            </Form.Group>

            <Form.Group >
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="number"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {phoneError && (
                <Alert variant="danger">Invalid Phone!</Alert>
              )}
            </Form.Group>

            <Button className='space' variant="dark" onClick={() => cancelForm()}>
                Cancel
            </Button>

            {loding ? (
              <Button variant="dark" disabled>
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                Loading...
              </Button>
            ) : (
              <Button variant="light" onClick={() => handleForm()}>
                Submit
              </Button>
            )}
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Handleform