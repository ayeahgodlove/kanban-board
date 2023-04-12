import React from "react";
import { Card } from "../card/card.component";
import { ColumnContainer } from "../layout/column-container/column-container.component";
import { ColumnTitle } from "../layout/column-title/column-title.component";

type Props = React.PropsWithChildren<{
  text: string;
}>;
export const Column: React.FC<Props> = ({ text }) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      <Card text="First Item" />
      <Card text="Second Item" />
      <Card text="Third Item" />
    </ColumnContainer>
  );
};
