export type ColumnDragItem = {
    id: string;
    text: string;
    type: "COLUMN";
}

export type DragItem = ColumnDragItem;
export type DragItemState = {
   readonly draggedItem: DragItem | null;
}