import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";


const Demo = () => {
  const modules = [
    {
      name: "DevOps",
      nolec: 2,
      noprac: 2
    },
    {
      name: "Enterprise Web Dev",
      nolec: 3,
      noprac: 2
    }
  ];
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
            <td>{modules[0].name}</td>
            <td>{modules[0].nolec}</td>
            <td>{modules[0].noprac}</td>
          </tr>
          <tr>
            <td>{modules[1].name}</td>
            <td>{modules[1].nolec}</td>
            <td>{modules[1].noprac}</td>
          </tr>
        </tbody >
      </table>
    </div>
  );
};

export default Demo;
