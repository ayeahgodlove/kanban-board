import React from "react";
import { CardContainer } from "../layout/card-container/card-container.component";

type Props = {
  text: string;
};
export const Card: React.FC<Props> = ({ text }) => {
  return <CardContainer>{text}</CardContainer>;
};
