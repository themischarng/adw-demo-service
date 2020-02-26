import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Table } from "react-bootstrap";

const API_URL =
  "https://xsrzrcryliwt908-adw.adb.us-ashburn-1.oraclecloudapps.com/ords/citurria/cs_master/";

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
                 <td>{item.cs_date}</td>
                  <td>{item.cs_seqno}</td>
                  <td>{item.cs_idno}</td>
                  <td>{item.cs_cardno}</td>
                  <td>{item.cs_casetype}</td>
		  <td>{item.cs_result}</td>
		  <td>{item.cs_finishdate}</td>
		  <td>{item.cs_userid}</td>
		  <td>{item.cs_cdflag}</td>
		  <td>{item.cs_ucall}</td>
		  <td>{item.cs_ecdate}</td>
		  <td>{item.cs_reply}</td>
		  <td>{item.cs_reply_phone}</td>
		  <td>{item.data_src_dt}</td>
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
