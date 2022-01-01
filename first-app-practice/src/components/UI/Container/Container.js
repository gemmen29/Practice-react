import React from "react";

const Container = (props) => {
  let classes = props.className;
  return (
    <div className={`${classes} bg-info py-5 min-vh-100`}>{props.children}</div>
  );
};

export default Container;
