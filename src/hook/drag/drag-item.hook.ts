import { useDispatch, useSelector } from "react-redux";
import { DragItem } from "../../models/drag/drag-item.model";
import { useDrag } from "react-dnd";
import { setDraggedItem } from "../../redux/drag/drag-item.slice";
import { RootState } from "../../redux/store";
import { useEffect } from "react";
import { getEmptyImage } from "react-dnd-html5-backend";

/**
 * @param item
 * @returns ConnectDragSource
 */
export const useDragItem = (item: DragItem) => {
  const dispatch = useDispatch();
  const draggedItem = useSelector<RootState, DragItem>(
    (state) => state.draggedItem.draggedItem as DragItem
  );

  const [, drag, preview] = useDrag({
    type: item.type, // type of item (CARD || COLUMN)
    item: () => {
      dispatch(setDraggedItem(item));
      dispatch({
        type: "SET_DRAGGED_ITEM",
        payload: item
      })
      return item;
    }, // retuns dragged item object and dispatches setDraggedItem action
    end: () => dispatch(setDraggedItem(null)), //called when drag is released
  });

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview])
  return { drag, draggedItem };
};
