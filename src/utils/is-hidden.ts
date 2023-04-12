import { DragItem } from "../models/drag/drag-item.model";

export const isHidden = (
  draggedItem: DragItem | null,
  itemType: string,
  id: string,
  isPreview?: boolean
): boolean => {
  return Boolean(
    !isPreview &&
      draggedItem &&
      draggedItem.type === itemType &&
      draggedItem.id === id
  );
};
