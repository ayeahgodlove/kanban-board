import React from "react";
import AppContainer from "./app-container/app-container.component";
import { Column } from "../column/column.component";

export const AppShell: React.FC = () => {
  return (
    <>
      <AppContainer>
        <Column text="Todo " />
        <Column text="In Progress " />
        <Column text="Completed " />
      </AppContainer>
    </>
  );
};
