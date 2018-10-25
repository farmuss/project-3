import React from "react";
import "./UnderConstruction.css";

const UnderConstruction = () => {

  return (
      <div className="row">
        <div className="col-md-12 d-flex justify-content-center">*********************************************************************************************************</div>
        <div className="col-md-12 d-flex justify-content-center">================================================================</div>
        <br />
        <div className="col-md-12 d-flex justify-content-center"><h2>This feature is going to be available in the next patch :)</h2></div>
        <div className="col-md-12 d-flex justify-content-center"><img src={require('./under_construction.gif')} /><img src={require('./under_construction.gif')} /><img src={require('./under_construction.gif')} /></div>
        <br />
        <div className="col-md-12 d-flex justify-content-center">================================================================</div>
        <div className="col-md-12 d-flex justify-content-center">*********************************************************************************************************</div>
      </div>
  )
};

export default UnderConstruction;
