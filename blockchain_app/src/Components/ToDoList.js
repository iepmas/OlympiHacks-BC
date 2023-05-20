import React from "react";
import ToDoItem from "./ToDoItem.js";
import "./ToDoList.css";

function ToDoList() {
  return (
    <header>
      <div style={{ border: '2px solid black', padding: '20px', width: '300px', margin: '20px' }}>
        <h2 style={{ marginBottom: '10px' }}>Todo:</h2>
        <div style={{ display: 'flex', marginBottom: '10px' }}>
          <input
            type="text"
            placeholder="New Item"
            style={{ flex: 1, marginRight: '10px', padding: '5px' }}
          />
          <button
            style={{
              backgroundColor: 'teal',
              color: 'white',
              padding: '5px 10px',
              border: 'none',
              borderRadius: '3px',
              cursor: 'pointer'
            }}
          >
            Add
          </button>
        </div>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
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
    </header>
  );
}

export default ToDoList;
