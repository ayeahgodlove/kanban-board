import { useSelector } from "react-redux";
import { useList } from "./list.hook";
import { RootState } from "../redux/store";
import { DragItem } from "../models/drag/drag-item.model";

const useAppState = () => {
  const { lists } = useList();
  const draggedItem = useSelector<RootState, DragItem>(
    (state) => state.draggedItem.draggedItem as DragItem
  );

  return {
    lists,
    draggedItem,
  };
};

export { useAppState };
