import React from "react";
import { ColumnContainerLayout } from "./colum-container.style";

interface Props {
  children: React.ReactNode;
}
export const ColumnContainer: React.FC<Props> = ({ children }) => {
  return <ColumnContainerLayout>{children}</ColumnContainerLayout>;
};
