import React from "react";
import "./gpa.css";
export default function GPA({ courseName, credits, grade }) {
  return (
    <div className="gpa">
      <p className="gpa-title">Course Name:</p>
      <p className="gpa-result">{courseName}</p>
      <p className="gpa-title">Credits:</p>
      <p className="gpa-result">{credits}</p>

      <p className="gpa-title">Grade:</p>
      <p className="gpa-result"> {grade}</p>
    </div>
  );
}