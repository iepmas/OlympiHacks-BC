function ToDoList() {
  return (
      <div style={{padding: '0px', width: '300px', margin: '20px', color:"white", background:"#03045e", borderRadius:"10px", boxShadow:"1px 1px 5px #000" }}>
        <h2 style={{ marginBottom: '0px', textAlign:"left", padding:"20px" }}>Todo</h2>
        <div style={{background:"#fff", padding:"20px", color:"black", borderRadius:" 0 0 10px 10px"}}>
          <div style={{ display: 'flex', marginBottom: '10px'}}>
            <input
              type="text"
              placeholder="New Item"
              style={{ flex: 1, marginRight: '10px', padding: '5px', borderRadius:"1px"}}
            />
            <button
              style={{
                backgroundColor: '#90e0ef',
                padding: '5px 10px',
                border: 'none',
                borderRadius: '3px',
                cursor: 'pointer'
              }}
            >
              Add
            </button>
          </div>
          <ul style={{ listStyleType: 'none', padding: 0, textAlign:"left" }}>
            <li style={{ marginBottom: '5px' }}>
              <input type="checkbox" id="item1" />
              <label htmlFor="item1" style={{ marginLeft: '5px' }}>
                Timecard Approvals
              </label>
            </li>
            <li style={{ marginBottom: '5px' }}>
              <input type="checkbox" id="item2" />
              <label htmlFor="item2" style={{ marginLeft: '5px' }}>
                Time Off Requests
              </label>
            </li>
          </ul>
        </div>
      </div>
  );
}

export default ToDoList;
