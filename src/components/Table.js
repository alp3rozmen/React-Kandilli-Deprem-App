
import React from "react";

function Table(props) {
    return (
        <>
        <table border={0} width={800}>
            <thead>
            <tr>
              <td>
                {props.title}
              </td>
              <td>
                {props.date}
              </td>
              <td>
                {props.mag}
              </td>
              <td>
               {props.depth}
              </td>
            </tr>
            </thead>
          </table>
        </>
    );
}
export default Table;