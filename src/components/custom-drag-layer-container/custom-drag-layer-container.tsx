import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { DragItem } from "../../models/drag/drag-item.model";
import { useDragLayer } from "react-dnd";
import { CustomDragContainerLayout } from "../layout/custom-drag-container/custom-drag-container.style";
import { Column } from "../column/column.component";
import { DragPreviewWrapper } from "../layout/drag-preview-container/drag-preview-container.style";

export const CustomDragLayer: React.FC = () => {
  const draggedItem = useSelector<RootState, DragItem>(
    (state) => state.draggedItem.draggedItem as DragItem
  );
  const { currentOffSet } = useDragLayer((monitor) => ({
    currentOffSet: monitor.getSourceClientOffset(),
  }));

  return draggedItem && currentOffSet ? (
    <CustomDragContainerLayout>
      <DragPreviewWrapper position={currentOffSet}>
        <Column id={draggedItem.id} text={draggedItem.text} isPreview />
      </DragPreviewWrapper>
    </CustomDragContainerLayout>
  ) : null;
};
