import React from "react";
import { CardContainer } from "../layout/card-container/card-container.component";

type CardProps = {
  text: string;
  id: string;
};
export const Card: React.FC<CardProps> = ({ text, id }) => {
  return <CardContainer>{text}</CardContainer>;
};
