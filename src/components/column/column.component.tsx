import React from "react";
import { Card } from "../card/card.component";
import { ColumnContainer } from "../layout/column-container/column-container.component";
import { ColumnTitle } from "../layout/column-title/column-title.component";
import { AddNewItem } from "../add-new-item/add-new-item.component";
import { useTask } from "../../hook/task.hook";

type ColumnProps = React.PropsWithChildren<{
  id: string;
  text: string;
}>;
export const Column: React.FC<ColumnProps> = ({ text, id }) => {
  const { getTaskByListId } = useTask();
  const tasks = getTaskByListId(id);
  const { addTask } = useTask();
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map((task) => {
        return <Card key={task.id} text={task.text} id={task.id} />;
      })}
      <AddNewItem
        toggleButtonText="+ Add another card"
        onAdd={(text) => addTask({ id, text })}
        dark
      />
    </ColumnContainer>
  );
};
