import React from "react";
import "./ListItem.css";
function ListItem({ Data }) {
  return (
    <div className="ListContainer">
      <div className="imageName">
        <img src={Data.image} alter="crop pic" />
      </div>
      <div className="cropname">Hindi_name : {Data.hindi_name}</div>
      <div className="cropname">District : {Data.district}</div>
      <div className="cropname">State : {Data.state}</div>
    </div>
  );
}

export default ListItem;
