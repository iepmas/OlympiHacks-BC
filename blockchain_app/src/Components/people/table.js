import React from "react";
import "./people.css"

function Table({datas}) {
    return(
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Title</th>
          <th>Department</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {datas.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.title}</td>
            <td>{row.department}</td>
            <td>{row.email}</td>
          </tr>
        ))}
      </tbody>
    </table>

    );
}

export default Table;