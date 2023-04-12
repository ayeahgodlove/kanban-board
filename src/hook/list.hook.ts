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

  // const loadLists = useCallback(() => {
  //   return dispatch(listActions.fetchListsAsync() as any);
  // }, [dispatch]);

  // const addList = async (list: List) => {
  //   return await listService
  //     .create(list)
  //     .then(async (listResponse) => {
  //       const data = await listResponse.json();
  //       dispatch(listActions.setActiveList(data));
  //       return true;
  //     })
  //     .catch((error) => {
  //       // dispatch(listActions.)
  //       return false;
  //     });
  // };
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

  // const editList = async (list: List) => {
  //   return await listService
  //     .update(list)
  //     .then(async (listResponse) => {
  //       const data = await listResponse.json();
  //       dispatch(listActions.editListsuccess(data));
  //       setList(data);
  //       return true;
  //     })
  //     .catch((error) => {
  //       return false;
  //     });
  // };
  const editList = async (list: List) => {};

  // useEffect(() => {
  //   loadLists();
  // }, [list, lists, isLoading, loadLists]);

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
