import { configureStore } from "@reduxjs/toolkit";
import { Action, applyMiddleware, combineReducers } from "redux";
import thunk, { ThunkAction } from "redux-thunk";
import { listReducer } from "./list/list.slice";
import { dragItemReducer } from "./drag/drag-item.slice";

const rootReducer = combineReducers({
    list: listReducer,
    draggedItem: dragItemReducer
});

const middlewareEnhancer = applyMiddleware(thunk);

const composedEnhancers = middlewareEnhancer;

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  enhancers: [composedEnhancers],
});

export type RootState = ReturnType<typeof rootReducer>;
export type appThunk = ThunkAction<void, RootState, unknown, Action<string>>;
