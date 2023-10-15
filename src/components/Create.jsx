import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import axios from "axios";
import { API } from "./apiUrl";
import { useNavigate } from "react-router-dom";

function Create() {
  // const API = 'https://651802d7582f58d62d35505c.mockapi.io/user'

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [states, setStates] = useState("");
  const Navigate = useNavigate();

  const postData = async (e) => {
    e.preventDefault();
    await axios.post(API, {
      Name,
      Email,
      city,
      states,
    });
    setName("");
    setEmail("");
    setCity("");
    setStates("");
    alert("User Successfully Added ...📨..📨.📨");
    Navigate("/Read");
  };

  return (
    <div className="container mt-5" style={{ minHeight: "70vh" }}>
      <Form
        style={{ marginTop: "120px" }}
        onSubmit={postData}
        className="bg-dark text-white border border-5 px-5 py-5 mb-5"
      >
        <h4 className="text-center mb-4 bg-warning py-3 rounded-3">
          <i class="bi bi-file-plus"></i> Add User Details
        </h4>
        <Row className="mb-4 mt-3">
          <Form.Group as={Col} lg="6" md="6" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              value={Name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter Your Name"
            />
          </Form.Group>
          <Form.Group as={Col} lg="6" md="6" controlId="validationCustom02">
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              required
              type="email"
              value={Email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter Your Email"
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group
            as={Col}
            lg="6"
            md="6"
            sm="12"
            controlId="validationCustom03"
          >
            <Form.Label>City</Form.Label>
            <Form.Control
              value={city}
              onChange={(event) => setCity(event.target.value)}
              type="text"
              placeholder="City"
              required
            />
          </Form.Group>
          <Form.Group
            as={Col}
            lg="6"
            md="6"
            sm="12"
            controlId="validationCustom04"
          >
            <Form.Label>State</Form.Label>
            <Form.Control
              value={states}
              onChange={(event) => setStates(event.target.value)}
              type="text"
              placeholder="State"
              required
            />
          </Form.Group>
        </Row>

        <Button
          className="mt-3 py-2 w-100 bg-success border-success rounded-pill"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Create;