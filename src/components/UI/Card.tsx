import { HTMLAttributes, ReactNode } from "react";

import "./Card.css";

interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps & HTMLAttributes<HTMLDivElement>> = (props) => {
  return <div className={"card " + props.className}>{props.children}</div>;
};

export default Card;
