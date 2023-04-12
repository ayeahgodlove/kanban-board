import React from "react";
import { CardContainerLayout } from "./card-container.style";

interface Props {
  children: React.ReactNode;
}
export const CardContainer: React.FC<Props> = ({ children }) => {
  return <CardContainerLayout>{children}</CardContainerLayout>;
};
