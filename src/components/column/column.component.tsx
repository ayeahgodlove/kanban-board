import React from "react";
import { Card } from "../card/card.component";
import { ColumnContainer } from "../layout/column-container/column-container.component";
import { ColumnTitle } from "../layout/column-title/column-title.component";
import { AddNewItem } from "../add-new-item/add-new-item.component";

type Props = React.PropsWithChildren<{
  text: string;
}>;
export const Column: React.FC<Props> = ({ text }) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      <Card text="Begin to use server side Generation" />
      <Card text="Begin to use static side generation" />
      <Card text="Third Item" />
      <AddNewItem
        toggleButtonText="+ Add another card"
        onAdd={console.log}
        dark
      />
    </ColumnContainer>
  );
};
