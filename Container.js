import React from "react";
import "./container.less";

const Container = (props) => {
  return (
    <div className="container main">{props.children}
    </div>
    )
}
export default Container;
