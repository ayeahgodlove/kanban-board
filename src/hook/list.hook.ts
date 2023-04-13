import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { List } from "../models/list.model";
import * as listActions from "../redux/list/list.slice";
import { nanoid } from "nanoid";

const useList = () => {
  const lists = useSelector<RootState, List[]>((state) => state.list.lists);
  const isLoading = useSelector<RootState, boolean>(
    (state) => state.list.loading
  );

  const list = useSelector<RootState, List>((state) => state.list.list);

  const dispatch = useDispatch();

  const addList = async (text: string) => {
    try {
      if (text.length > 0) {
        const listItem = {
          id: nanoid(),
          text: text,
          tasks: [],
        };
        dispatch(listActions.addListsuccess(listItem));
        dispatch({
          type: "ADD_LIST|COLUMN_SUCCESS",
          payload: listItem,
        });
      }
    } catch (error: any) {
      dispatch({
        type: "ADD_LIST|COLUMN_ERROR",
        payload: error.message,
      });
    }
  };
  const setList = (list: List) => {
    dispatch(listActions.setActiveList(list));
  };
  
  const editList = async (list: List) => {};

  return {
    list,
    lists,
    isLoading,
    addList,
    editList,
    setList,
  };
};

export { useList };
