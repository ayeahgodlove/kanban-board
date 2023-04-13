import React, { useRef } from "react";
import { CardContainer } from "../layout/card-container/card-container.component";
import { useDispatch } from "react-redux";
import { useAppState } from "../../hook/app-state.hook";
import { isHidden } from "../../utils/is-hidden";
import { useDragItem } from "../../hook/drag/drag-item.hook";
import { useDrop } from "react-dnd";
import { throttle } from "throttle-debounce-ts";
import { moveTask } from "../../redux/list/list.slice";
import { setDraggedItem } from "../../redux/drag/drag-item.slice";

type CardProps = {
  text: string;
  id: string;
  columnId: string;
  isPreview?: boolean;
};
export const Card: React.FC<CardProps> = ({
  id,
  text,
  columnId,
  isPreview,
}) => {
  const { draggedItem } = useAppState();
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);
  const { drag } = useDragItem({
    type: "CARD",
    id,
    text,
    columnId,
  });
  const [, drop] = useDrop({
    accept: "CARD",
    hover: throttle(200, () => {
      if (!draggedItem) {
        return;
      }
      if (draggedItem.type !== "CARD") {
        return;
      }
      if (draggedItem.id === id) {
        return;
      }
      dispatch(
        moveTask({
          draggedItemId: draggedItem.id,
          hoverItemId: id,
          sourceColumnId: draggedItem.columnId,
          targetColumnId: columnId,
        })
      );
      dispatch(setDraggedItem({ ...draggedItem, columnId }));
    }),
  });

  drag(drop(ref));
  return (
    <CardContainer
      isPreview={isPreview!!}
      ref={ref}
      isHidden={isHidden(draggedItem, "CARD", id, isPreview)}
    >
      {text}
    </CardContainer>
  );
};
