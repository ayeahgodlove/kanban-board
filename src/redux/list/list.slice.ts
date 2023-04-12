import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ListState } from "../../models/list.model";
import { List } from "../../models/list.model";
import { appState } from "../../models/app-state";
import { findItemIndexById, moveItem } from "../../utils/array-utility";

export const initialState: ListState = {
  loading: false,
  hasErrors: false,
  error: null,
  lists: [...appState.lists],
  list: {
    id: "",
    text: "",
    tasks: [],
  },
  draggedId: "",
  hoverId: "",
};
type MoveListProps = {
  draggedId: string;
  hoverId: string;
};

// export const fetchListsAsync = createAsyncThunk(
//   "lists/fetchListsAsync",
//   async (_, thunkApi) => {
//     try {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/lists"
//       );
//       const data = await response.json();

//       return data;
//     } catch (_) {
//       thunkApi.rejectWithValue({
//         message: "Failed to fetch",
//       });
//     }
//   }
// );

export const listSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {
    fetchListsRequest: (state) => {
      state.loading = true;
    },
    fetchListsSuccess: (state, action: PayloadAction<List[]>) => {
      state.loading = false;
      state.lists = action.payload;
    },
    fetchListsError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    editListsuccess: (state, action: PayloadAction<List>) => {
      state.lists = state.lists.map((list) => {
        return list.id === action.payload.id ? action.payload : list;
      });
    },
    addListsuccess: (state, action: PayloadAction<List>) => {
      state.lists = [...state.lists, action.payload];
    },
    setActiveList: (state, action: PayloadAction<List>) => {
      state.list = action.payload;
    },
    // move list
    moveList: (state, action: PayloadAction<MoveListProps>) => {
      const { draggedId, hoverId } = action.payload;
      const dragIndex = findItemIndexById(state.lists, draggedId);
      const hoverIndex = findItemIndexById(state.lists, hoverId);
      state.lists = moveItem(state.lists, dragIndex, hoverIndex);
    },
    fetchTasksSuccess: (state, action: PayloadAction<List[]>) => {
      state.loading = false;
      state.lists = action.payload;
    },
    fetchTasksError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    editTasksuccess: (state, action: PayloadAction<List>) => {
      state.lists = state.lists.map((list) => {
        return list.id === action.payload.id ? action.payload : list;
      });
    },
    addTasksuccess: (state, action: PayloadAction<List>) => {
      state.lists = state.lists.map((list) => {
        return list.id === action.payload.id ? action.payload : list;
      });
      // state.lists = [...state.lists, action.payload];
    },
    setActiveTask: (state, action: PayloadAction<List>) => {
      state.list = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchListsAsync.pending, (state) => {
  //     state.loading = true;
  //   });
  //   builder.addCase(fetchListsAsync.fulfilled, (state, action) => {
  //     state.loading = false;
  //     state.lists = action.payload;
  //   });
  //   builder.addCase(fetchListsAsync.rejected, (state, action) => {
  //     state.loading = false;
  //     state.error = action.payload;
  //   });
  // },
});

export const {
  fetchListsError,
  fetchListsRequest,
  fetchListsSuccess,
  setActiveList,
  addListsuccess,
  editListsuccess,
  addTasksuccess,
  editTasksuccess,
  fetchTasksError,
  fetchTasksSuccess,
  setActiveTask,
} = listSlice.actions;
export const reducer = listSlice.reducer;
export { reducer as listReducer };
