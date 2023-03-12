import React from "react";
import { useState } from "react";

const Keyfeature  = ({heading,discription}) =>{
    return(
        <div className="SolokeyFeature">      
        <h3>{heading}</h3>
        <p>{discription}</p>
        </div>
        )
}
export default Keyfeature