import React, { useState } from 'react';
import StudentForm from './form';
import jsonData from './data.json';
import './table.css'
  
function TableData() {
  const [studentData, setStudentData] = useState(jsonData);
  
  const tableRows = studentData.map((info) => {
    return (
      <tr>
        <td>{info.id}</td>
        <td>{info.name}</td>
        <td>{info.status}</td>
        <td>{info.condition}</td>
        <td>{info.location}</td>
        <td>{info.owner}</td>
        <td>{info.user}</td>
        <td>{info.checkoutdate}</td>
        <td>{info.returnbydate}</td>
        <td>{info.purchasedate}</td>
        <td>{info.cost}</td>
        <td>{info.currentvalue}</td>
        <td>{info.schedule}</td>
        <td>{info.comments}</td>
      </tr>
    );
  });
  
  const addRows = (data) => {
    const totalStudents = studentData.length;
    data.id = totalStudents + 1;
    const updatedStudentData = [...studentData];
    updatedStudentData.push(data);
    setStudentData(updatedStudentData);
  };
  
  return (
    <div>
      <table className="table table-stripped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Condition</th>
            <th>Location</th>
            <th>Owner</th>
            <th>User</th>
            <th>Checkout Date</th>
            <th>Return-By Date</th>
            <th>Purchase Date</th>
            <th>Cost</th>
            <th>Current Value</th>
            <th>Maintenance Schedule</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
      <StudentForm func={addRows} />
    </div>
  );
}
  
export default TableData;