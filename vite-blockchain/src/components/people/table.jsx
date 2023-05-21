import { useState } from "react";
import "./people.css"

function Table({datas}) {
  const [info, setInfo] = useState({})
  const [showInfo, setShowInfo] = useState(false)

  const handleInfo = (row) => {
    console.log(row)
    setInfo(row)
    setShowInfo(true)
  }
    return(
      <div>
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
            {datas?.map((row) => (
              <tr key={row.id} onClick={() => handleInfo(row)}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.title}</td>
                <td>{row.department}</td>
                <td>{row.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {showInfo ? 
        <div>
          <h3 style={{color:"#fff"}}>{info.name} Extra Info</h3>
          {Object.entries(info).map(([k,v]) => 
              <p key={k} style={{color:"#fff", margin:0, padding:0}}>{k}: {v}</p>
            )}
        </div> : null}
      </div>
    );
}

export default Table;