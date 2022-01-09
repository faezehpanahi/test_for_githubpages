import React from "react";
//import "./person.css";

const Person = ({ fullName, deleted, changed }) => {
  return (
    <div className="card text-white bg-info mt-3 mb-3 mx-auto w-25">
      <div className="card-body text-center">
        <p className="d-block">{`${fullName}`}</p>
        <div className="input-group justify-content-center">
          <input
            className="form-control w-50"
            onChange={changed}
            placeholder={fullName}
          />
          <div className="input-group-prepend">
            <button
              className="btn btn-danger btn-sm fa fa-trash"
              onClick={deleted}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Person;
