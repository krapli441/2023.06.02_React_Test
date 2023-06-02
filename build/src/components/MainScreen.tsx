import React from "react";

interface mainProps {
  text: string;
}

const mainContainer: React.FC<mainProps> = (props) => {
  return (
    <>
      <div className="main">{props.text}</div>
    </>
  );
};

export default mainContainer;
