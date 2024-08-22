import { configureStore, createSlice } from '@reduxjs/toolkit';

// Define the initial state of the store
const initialState = {
  counter: 0,
};

// Create a slice of state with actions and reducers
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1; // Decrease the counter by 1 when the decrement action is called
    },
  },
});

// Extract the actions and the reducer
export const { increment, decrement } = counterSlice.actions;
const counterReducer = counterSlice.reducer;

// Create the Redux store using configureStore
const store = configureStore({
  reducer: counterReducer,
});

export default store;
