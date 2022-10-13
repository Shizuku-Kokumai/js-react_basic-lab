import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

const Demo = () => {
  return (
    <div>
      <h2>HDip Computer Science - Modules table</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>no lectures</th>
            <th>no practicals</th>
          </tr>
        </thead>
        <tbody >
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
        </tbody >
      </table>
    </div>
  );
};

export default Demo;