import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Table } from "react-bootstrap";

const API_URL =
  "https://xsrzrcryliwt908-adw.adb.us-ashburn-1.oraclecloudapps.com/ords/citurria/CS_Master/";

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
            <th>CS_DATE</th>
            <th>CS_SEQNO</th>
            <th>CS_IDNO</th>
            <th>CS_CARDNO</th>
            <th>CS_CASETYPE</th>
			<th>CS_RESULT</th>
			<th>CS_FINISHDATE</th>
			<th>CS_USERID</th>
			<th>CS_CDFLAG</th>
			<th>CS_UCALL</th>
			<th>CS_ECDATE</th>
			<th>CS_REPLY</th>
			<th>CS_REPLY_PHONE</th>
			<th>DATA_SRC_DT</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
            {
              return (
                <tr key={`item-${index}`}>
                  <td>{item.CS_DATE}</td>
                  <td>{item.CS_SEQNO}</td>
                  <td>{item.CS_IDNO}</td>
                  <td>{item.CS_CARDNO}</td>
                  <td>{item.CS_CASETYPE}</td>
				  <td>{item.CS_RESULT}</td>
				  <td>{item.CS_FINISHDATE}</td>
				  <td>{item.CS_USERID}</td>
				  <td>{item.CS_CDFLAG}</td>
				  <td>{item.CS_UCALL}</td>
				  <td>{item.CS_ECDATE}</td>
				  <td>{item.CS_REPLY}</td>
				  <td>{item.CS_REPLY_PHONE}</td>
				  <td>{item.DATA_SRC_DT}</td>
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
