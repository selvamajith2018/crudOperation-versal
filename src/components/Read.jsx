import React from "react";
import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import { API } from "./apiUrl";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Read() {
  const [apiData, setApiData] = useState([]);
  const Navigate = useNavigate();

  const callGetAPI = async () => {
    const res = await axios.get(API);
    setApiData(res.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(API + id);
    callGetAPI();
    alert("User Data Deleted..📤..📤.📤");
  };

  const updateUser = ({ id, Name, Email, states, city }) => {
    localStorage.setItem("id", id);
    localStorage.setItem("Name", Name);
    localStorage.setItem("Email", Email);
    localStorage.setItem("states", states);
    localStorage.setItem("city", city);
    Navigate("/Update");
  };

  useEffect(() => {
    callGetAPI();
  }, []);

  return (
    <div className="container mt-5" style={{ minHeight: "80vh" }}>
      <Table
        className="border border-4 table-dark"
        responsive
        hover
        bordered
        style={{ marginTop: "60px" }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>E-mail</th>
            <th>City</th>
            <th>State</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="table-info">
          {apiData.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.Name}</td>
              <td>{data.Email}</td>
              <td>{data.city}</td>
              <td>{data.states}</td>
              <td className="d-flex justify-content-center">
                <button
                  className="bg-danger text-white rounded me-2"
                  onClick={() => {
                    deleteUser(data.id);
                  }}
                >
                  <i class="bi bi-trash-fill"></i>
                </button>
                <button
                  className="bg-primary text-white rounded"
                  onClick={() => {
                    updateUser(data);
                  }}
                >
                  <i class="bi bi-pencil-square"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Read;