import React from "react";
import "./ImageList.css";
import ImageStyle from "../ImageStyle";

const ImageList = (props) => (
	<div className="container">
		<div className="row">
	    {props.imageFileNames.map((imageFileName, index) => {
	      return <ImageStyle key={index} imageFileName={imageFileName} alt={imageFileName} clickHandler={props.clickHandler} gameStatus={props.gameStatus} />
	    })}
	  </div>
  </div>
);

export default ImageList;