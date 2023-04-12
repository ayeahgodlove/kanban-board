import React from "react";
import AppContainer from "./app-container/app-container.component";
import { Column } from "../column/column.component";
import { AddNewItem } from "../add-new-item/add-new-item.component";
import { useList } from "../../hook/list.hook";
import { CustomDragLayer } from "../custom-drag-layer-container/custom-drag-layer-container";

export const AppShell: React.FC = () => {
  const { addList, lists } = useList();
  return (
    <>
      <AppContainer>
        <CustomDragLayer />
        {lists.map((list) => {
          return <Column key={list.id} text={list.text} id={list.id} />;
        })}
        <AddNewItem
          toggleButtonText="+ Add another list"
          onAdd={(text) => addList(text)}
        />
      </AppContainer>
    </>
  );
};
