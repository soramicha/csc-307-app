// src/Table.jsx
import React from "react";

function TableHeader() {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
      </thead>
    );
}

// the only props we have is just the characterData
function TableBody(props) {
  // be specific about the props name again and map it
    const rows = props.characterData.map((row, index) => {
        return (
          <tr key={index}>
            <td>{row.name}</td>
            <td>{row.job}</td>
            <td>
                <button onClick={() => props.removeCharacter(index)}>
                    Delete
                </button>
            </td>
          </tr>
        );
       }
      );
    return (
      <tbody>
        {rows}
      </tbody>
    );
  }

function Table(props) {
  // App.js passes down arguments into props
  // we break the props apart, putting props.characterData into characterData, and etc.
  return (
    <table>
      <TableHeader/>
      <TableBody characterData={props.characterData} removeCharacter={props.removeCharacter}/>
    </table>
  );
}

export default Table;