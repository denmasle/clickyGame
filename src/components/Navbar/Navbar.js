import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <div className="bg-dark navbar-dark container-fluid text-center pt-1 pb-1 mb-5">
      <div className="row">
        <div className="col-md-4">
          <h2><a href="." className="text-light line" id="app-name">Motorcycle Clicky</a></h2>
        </div>
        <div className={"col-md-4 pt-2" + (props.gameStatus == "2" ? " text-danger" : (props.gameStatus == "1" ? " text-success" : " text-light"))}>
          <h5>{props.feedback}</h5>
        </div>
        <div className="col-md-4 text-white nounderline pt-2">
          <h4>Score= {props.score} / Best Score= {props.bestScore}</h4>
        </div>
      </div>
    </div>
);

export default Navbar;