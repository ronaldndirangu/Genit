import React from "react";
import "./index.scss";
import CaretUp from "../../Styles/Icons/CaretUp";
import CaretDown from "../../Styles/Icons/CaretDown";

const Table = ({ numbers, handleSort, asc }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Index</th>
          <th className="table-header__no" onClick={e => handleSort(e)}>
            Number
            {!asc ? <CaretDown /> : <CaretUp />}
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
