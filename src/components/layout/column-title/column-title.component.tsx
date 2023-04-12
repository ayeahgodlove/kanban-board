import React from "react";
import { ColumnTitleLayout } from "./column-title.style";

interface Props {
  children: React.ReactNode;
}
export const ColumnTitle: React.FC<Props> = ({ children }) => {
  return <ColumnTitleLayout>{children}</ColumnTitleLayout>;
};
