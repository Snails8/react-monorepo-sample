import React from "react"

type LabelProps = {
  text: string;
  color?: string;
};

const Label: React.FC<LabelProps> = ({ text, color = 'black' }) => {
  return (
    <span style={{ color }}>{text}</span>
  )
}

export default Label