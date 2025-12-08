import React from "react";
import { HelloWorldStyle } from "./hello-world-style";
import { Outlet } from "react-router-dom";
const HelloWorldComponent=()=>{
    return (
        <HelloWorldStyle>
        <div>
        <h1 className="element">Sri eshwar</h1>
        </div>
        <Outlet />
        </HelloWorldStyle>
    );
}
export default HelloWorldComponent;
