import { useDispatch } from "react-redux";
import { DragItem } from "../../models/drag/drag-item.model";
import { useDrag } from "react-dnd";
import { setDraggedItem } from "../../redux/drag/drag-item.slice";

/**
 * 
 * @param item 
 * @returns ConnectDragSource
 * 
 */
export const useDragItem = (item: DragItem) => {
    const dispatch = useDispatch();
    const [, drag] = useDrag({
        type: item.type, // type of item (CARD || COLUMN)
        item: () => {
            dispatch(setDraggedItem(item));
            return item;
        }, // retuns dragged item object and dispatches setDraggedItem action
        end: () => dispatch(setDraggedItem(null)) //called when drag is released
    })
    return drag;
}