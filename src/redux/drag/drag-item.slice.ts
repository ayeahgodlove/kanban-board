import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DragItemState, DragItem } from "../../models/drag/drag-item.model";

export const dragItemState: DragItemState = {
  draggedItem: null,
};

export const dragItemSlice = createSlice({
  name: "dragItems",
  initialState: dragItemState,
  reducers: {
    setDraggedItem: (state, action: PayloadAction<DragItem | null>) => {
      state.draggedItem = action.payload;
    },
  },
});

export const { setDraggedItem } = dragItemSlice.actions;
export const reducer = dragItemSlice.reducer;
export { reducer as dragItemReducer };
