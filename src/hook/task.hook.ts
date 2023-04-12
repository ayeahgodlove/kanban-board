import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { Task } from "../models/task.model";
import * as taskActions from "../redux/list/list.slice";
import { useList } from "./list.hook";
import { findItemIndexById } from "../utils/array-utility";
import { nanoid } from "nanoid";

const useTask = () => {
  const { lists } = useList();
  const foundTasks = useCallback(
    (id: string) => {
      return lists.find((list) => list.id === id)?.tasks || [];
    },
    [lists]
  );

  const dispatch = useDispatch();

  const getTaskByListId = useCallback(
    (id: string) => {
      return lists.find((list) => list.id === id)?.tasks || [];
    },
    [lists]
  );

  const addTask = async (task: Task) => {
    try {
      const { id, text } = task;
      const targetListIndex = findItemIndexById(lists, id);
      const list = lists[targetListIndex];
      if (task.text.length > 0 && task && task !== null && task !== undefined) {
        dispatch(
          taskActions.addTasksuccess({
            ...list,
            tasks: [
              ...list.tasks,
              {
                id: nanoid(),
                text: text,
              },
            ],
          })
        );
      }
      dispatch({
        type: "ADD_TASK|CARD_SUCCESS",
        payload: task,
      });
    } catch (error: any) {
      dispatch({
        type: "ADD_TASK|CARD_ERROR",
        payload: error.message,
      });
    }
  };
  // const addTask = async (task: Task) => {
  //   return await taskService
  //     .create(task)
  //     .then(async (taskResponse) => {
  //       const data = await taskResponse.json();
  //       dispatch(taskActions.setActiveTask(data));
  //       return true;
  //     })
  //     .catch((error) => {
  //       // dispatch(taskActions.)
  //       return false;
  //     });
  // };

  const setTask = (task: Task) => {
    // dispatch(taskActions.setActiveTask(task));
  };

  // const editTask = async (task: Task) => {
  //   return await taskService
  //     .update(task)
  //     .then(async (taskResponse) => {
  //       const data = await taskResponse.json();
  //       dispatch(taskActions.editTasksuccess(data));
  //       setTask(data);
  //       return true;
  //     })
  //     .catch((error) => {
  //       return false;
  //     });
  // };
  const editTask = async (task: Task) => {};

  // useEffect(() => {
  //   loadTasks();
  // }, [task, tasks, isLoading, loadTasks]);

  return {
    addTask,
    editTask,
    setTask,
    foundTasks,
    getTaskByListId,
  };
};

export { useTask };
