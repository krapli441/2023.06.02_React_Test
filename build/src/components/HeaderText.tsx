import React from "react";

interface Props {
  name: string;
}

const headersText: React.FC<Props> = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
    </>
  );
};

export default headersText;
