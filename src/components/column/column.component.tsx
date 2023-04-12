import React, { useRef } from "react";
import { Card } from "../card/card.component";
import { ColumnContainer } from "../layout/column-container/column-container.component";
import { ColumnTitle } from "../layout/column-title/column-title.component";
import { AddNewItem } from "../add-new-item/add-new-item.component";
import { useTask } from "../../hook/task.hook";
import { useDragItem } from "../../hook/drag/drag-item.hook";
import { useDrop } from "react-dnd";
import { throttle } from "throttle-debounce-ts";
import { useDispatch } from "react-redux";
import { moveList } from "../../redux/list/list.slice";
import { isHidden } from "../../utils/is-hidden";

type ColumnProps = React.PropsWithChildren<{
  id: string;
  text: string;
  isPreview?: boolean;
}>;
export const Column: React.FC<ColumnProps> = ({ text, id, isPreview }) => {
  const { getTaskByListId } = useTask();
  const tasks = getTaskByListId(id);
  const { addTask } = useTask();
  const dispatch = useDispatch();
  const { drag, draggedItem } = useDragItem({
    type: "COLUMN",
    id,
    text,
  });
  const ref = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop({
    accept: "COLUMN",
    hover: throttle(200, () => {
      if (!draggedItem) {
        return;
      }
      if (draggedItem.type === "COLUMN") {
        if (draggedItem.id === id) {
          return;
        }
        dispatch(moveList({ draggedId: draggedItem.id, hoverId: id }));
      }
    }),
  });

  drag(drop(ref));
  return (
    <ColumnContainer
      isPreview={isPreview!!}
      ref={ref}
      isHidden={isHidden(draggedItem, "COLUMN", id, isPreview)}
    >
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
