import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Table } from "react-bootstrap";

const API_URL =
  "https://xsrzrcryliwt908-adw.adb.us-ashburn-1.oraclecloudapps.com/ords/citurria/people/";

const fetchHeader = new Headers();
fetchHeader.append("Authorization", "Basic Y2l0dXJyaWE6V2VsY29tZTEyMzQ1");

const requestOptions = {
  method: "GET",
  headers: fetchHeader,
  redirect: "follow"
};

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(API_URL, requestOptions);
      const result = await response.json();
      setItems(result.items);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>ADW K8S demo</h1>
      </header>
      <Table variant="dark" striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Profession</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
            {
              return (
                <tr key={`item-${index}`}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.profession}</td>
                  <td>{item.location}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
