import React from "react";
import "./index.scss";

const Table = ({ numbers, handleSort }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Index</th>
          <th className="table-header__no" onClick={e => handleSort(e)}>
            Number
          </th>
        </tr>
      </thead>
      <tbody>
        {numbers &&
          numbers.map((num, index) => {
            return (
              <tr key={index.toString()}>
                <td>{(index + 1).toString()}</td>
                <td>{num}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default Table;
