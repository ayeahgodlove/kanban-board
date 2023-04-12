import React from "react";
import AppContainer from "./app-container/app-container.component";
import { Column } from "../column/column.component";
import { AddNewItem } from "../add-new-item/add-new-item.component";

export const AppShell: React.FC = () => {
  return (
    <>
      <AppContainer>
        <Column text="Todo " />
        <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
      </AppContainer>
    </>
  );
};
