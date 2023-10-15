import React from "react";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { API } from "./apiUrl";
import { useNavigate } from "react-router-dom";

function Update() {
  const [id, setId] = useState("");
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [states, setStates] = useState("");
  const navigate = useNavigate();

  const updateData = async (e) => {
    e.preventDefault();
    await axios.put(API + id, {
      Name,
      Email,
      city,
      states,
    });
    setName("");
    setEmail("");
    setCity("");
    setStates("");
    alert("User Details Successfully Updated...📧");
    navigate("/Read");
  };

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("Name"));
    setEmail(localStorage.getItem("Email"));
    setCity(localStorage.getItem("city"));
    setStates(localStorage.getItem("states"));
  }, []);

  return (
    <div className="container mt-5">
      <Form
        style={{ marginTop: "120px" }}
        onSubmit={updateData}
        className="bg-dark text-white border border-5 px-5 py-5 mb-5"
      >
        <h4 className="text-center mb-4 bg-warning py-3 rounded-3">
          <i class="bi bi-arrow-clockwise"></i> Modify User Details
        </h4>
        <Row className="mb-3 mt-4">
          <Form.Group as={Col} lg="6" md="6" controlId="validationCustom01">
            <Form.Label>Name</Form.Label>
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
        <Row className="mb-3 mt-4">
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
          className="mt-3 py-2 w-100 bg-success rounded-pill border-success"
          type="submit"
        >
          Update
        </Button>
      </Form>
    </div>
  );
}

export default Update;