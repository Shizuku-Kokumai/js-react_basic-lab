import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

const Demo = () => {
  return (
    <table className="table table-borderd">
      <thread>
        <tr>
          <th>Name</th>
          <th>no lectures</th>
          <th>no practicals</th>
        </tr>
      </thread>
      <tbody>
        <tr>
          <td>devops</td>
          <td>2</td>
          <td>2</td>
        </tr>
        <tr>
          <td>enterprise web dev</td>
          <td>3</td>
          <td>2</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Demo;