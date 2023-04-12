import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AppState, appState } from "../models/app-state";
import { List } from "../models/list.model";

export const initialState: AppState = {
  loading: false,
  hasErrors: false,
  error: null,
  lists: [...appState.lists],
  list: {
    id: "",
    text: "",
    tasks: [],
  },
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
    setActiveList: (state, action: PayloadAction<List>) => {
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
} = listSlice.actions;
export const reducer = listSlice.reducer;
export { reducer as listReducer };
