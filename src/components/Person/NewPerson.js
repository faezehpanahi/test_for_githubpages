import React from "react";
import { Button } from "react-bootstrap";

function NewPerson({ setPerson, person, addHandlePerson }) {
  return (
    <div className="m-2 p-2">
      <form
        className="form-inline justify-content-center"
        onSubmit={(event) => event.preventDefault()}
      >
        <div className="input-group w-25">
          <input
            onChange={setPerson}
            type="text"
            className="form-control"
            placeholder="اسم را بهم بده"
            value={person}
          />
          <div className="input-group-prepend">
            <Button
              type="submit"
              variant="success"
              size="sm"
              className="fa fa-plus-square"
              onClick={addHandlePerson}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default NewPerson;
