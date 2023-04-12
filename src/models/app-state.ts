import { List } from "./list.model";

export type AppState = {
  lists: List[];
  list: List;
  loading: boolean,
  hasErrors: boolean,
  error: any,
};
export const appState: AppState = {
  lists: [
    {
      id: "0",
      text: "To Do",
      tasks: [{ id: "c0", text: "Generate app scaffold" }],
    },
    {
      id: "1",
      text: "In Progress",
      tasks: [{ id: "c2", text: "Learn Typescript" }],
    },
    {
      id: "2",
      text: "Done",
      tasks: [{ id: "c3", text: "Begin to use static typing" }],
    },
  ],
  loading: false,
  hasErrors: false,
  error: null,
  list: {
    id: "",
    text: "",
    tasks: []
  }
};
