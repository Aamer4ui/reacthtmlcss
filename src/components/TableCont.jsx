import React from "react";
import {Table} from "react-bootstrap"

export const TableCont = () => {
    return (
        <div className="App">
            <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Sr. No</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Abdul</td>
      <td>Majeed</td>
      <td>@abmajeed</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Shaikh</td>
      <td>Sameer</td>
      <td>@shsam</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2"> <strong>Aamer Sohel</strong></td>
      <td>@ammu_1820</td>
    </tr>
  </tbody>
</Table>
        </div>
    )
}