import React from "react";

import FacebookLogo from "./assets/facebooklogo";

// import All from "./assets/all";


export default function footer(){
    return<>
    <div className="mangerfooter">
    <div className="mainfooter">
        <h4>
            GET IN TOUCH!
        </h4>
        <h5>MohamedMonged@gmail.com</h5>
        

    </div>
    <button id="conbtn">CONTACT US</button>
    <div className="mainfooter">
      <FacebookLogo />
      {/* <All/> */}
        <h5>COPYRIGHTS@2023</h5>
        

    </div>
    </div>
    </>
}