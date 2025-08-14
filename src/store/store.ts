import { configureStore, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


// Slice for selected numbers
interface NumberState {
  selected: number[];
}

const initialState: NumberState = {
  selected: [],
};

const numberSlice = createSlice({
  name: "numbers",
  initialState,
  reducers: {
    selectNumber: (state, action: PayloadAction<number>) => {
      if (state.selected.length < 2) {
        state.selected.push(action.payload);
      } else {
        state.selected = [action.payload];
      }
    },
    clearSelection: (state) => {
      state.selected = [];
    },
    setSelection: (state, action: PayloadAction<number[]>) => {
      state.selected = action.payload;
    },
  },
});

export const { selectNumber, clearSelection, setSelection } = numberSlice.actions;

export const store = configureStore({
  reducer: {
    numbers: numberSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
