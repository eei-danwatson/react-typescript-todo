import React from "react";

interface Props {
  text: string;
}

const ToDo: React.FC<Props> = ({ text }) => {
  return <li>{text}</li>;
};

export default ToDo;