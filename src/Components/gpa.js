import React from "react";
import './gpa.css'
export default function GPA({courseName,credits,grade}){
    return (
        <div className="gpa">
           Course Name:{courseName}
           <br></br> 
           Credits:{credits}
           <br></br>
           Grade:{grade}
        </div>
   )
}