import React from 'react'
import { Button } from 'react-bootstrap'
import "./pagenotfound.css";

function PageNotFound() {
    return (
        <div className="hide-nav">
             <div>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for could not be found.</p>
      <p>Please check the URL and try again.</p>
    </div>
          <p> <a className='button' href="/home">Home</a></p> 
        </div>
    )
}

export default PageNotFound;
