import React from "react";
import {NotFoundStyle} from "./404-style.js";
import {Link} from "react-router-dom";
const NotFoundComponent=()=>{
    return (
        <NotFoundStyle>
            <div className="notfound">
                <h1 className="title">404 - Page Not Found</h1>
                <p className="para">The page you are looking for does not exist.</p>
                <Link to="/hello" className="link">Go back to Home</Link>
            </div>
        </NotFoundStyle>
    );
};
export default NotFoundComponent;