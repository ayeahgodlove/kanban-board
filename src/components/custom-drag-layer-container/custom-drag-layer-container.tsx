import React from "react";
import { useDragLayer } from "react-dnd";
import { CustomDragContainerLayout } from "../layout/custom-drag-container/custom-drag-container.style";
import { Column } from "../column/column.component";
import { DragPreviewWrapper } from "../layout/drag-preview-container/drag-preview-container.style";
import { useAppState } from "../../hook/app-state.hook";
import { Card } from "../card/card.component";

export const CustomDragLayer: React.FC = () => {
  const { draggedItem } = useAppState();
  const { currentOffSet } = useDragLayer((monitor) => ({
    currentOffSet: monitor.getSourceClientOffset(),
  }));

  return draggedItem && currentOffSet ? (
    <CustomDragContainerLayout>
      <DragPreviewWrapper position={currentOffSet}>
        {draggedItem.type === "COLUMN" ? (
          <Column id={draggedItem.id} text={draggedItem.text} isPreview />
        ) : (
          <Card
            columnId={draggedItem.id}
            text={draggedItem.text}
            id={draggedItem.id}
            isPreview
          />
        )}
      </DragPreviewWrapper>
    </CustomDragContainerLayout>
  ) : null;
};
