import React from "react";
import { Badge, Alert } from "react-bootstrap";

function Header({ appTitle, persons }) {
  let badgeStyle = "";
  if (persons.length >= 3) {
    badgeStyle = "bg-success text-white";
  }
  if (persons.length <= 2) {
    badgeStyle = "bg-warning text-white";
  }
  if (persons.length <= 1) {
    badgeStyle = "bg-danger text-white";
  }

  return (
    <div>
      <Alert variant="danger">
        <h2>{appTitle}</h2>
      </Alert>
      <h5 className="alert alert-light">
        تعداد افراد{" "}
        <Badge pill className={badgeStyle}>
          {persons.length}
        </Badge>{" "}
        نفر می‌باشد
      </h5>
    </div>
  );
}

export default Header;
