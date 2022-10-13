import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";


const Demo = props => {
  const list = props.modules.map((module, index) => {
    return (
      <tr key={index} >
        <th>{module.name}</th>
        <th>{module.noLectures}</th>
        <th>{module.noPracticals}</th>
      </tr>
    );
  })
  return (
    <div>
      <h2>{`${props.course}`}</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>no lectures</th>
            <th>no practicals</th>
          </tr>
        </thead>
        <tbody >
          {list}
        </tbody >
      </table>
    </div>
  );

};

export default Demo;
