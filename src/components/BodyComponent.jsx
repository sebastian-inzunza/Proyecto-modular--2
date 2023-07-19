import React from "react";

import Chivas from "../asset/Chivas.svg";
import Leones from "../asset/leones.png";
import America from "../asset/america.png";

function BodyComponent() {
    return (
      <div className="transparent-bg">
        <div className="grid grid-cols-3 text-center">
          <div className="mt-5 flex justify-center">
            <img className="w-1/2"
             src={Leones}
             alt="" />
          </div>
          <div className="mt-4 flex justify-center">
            <img className="w-1/2" 
            src={America} 
            alt="" />
          </div>
          <div className="mt-4 flex justify-center">
            <img className="w-1/2" 
            src={Chivas} 
            alt="" />
          </div>
        </div>
      </div>
    );
  }
  
  export default BodyComponent;
  

