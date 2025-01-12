import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: ''
};

export const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    resetErrorState: (state) => {
      state = initialState;
    },
    resetErrorMessage: (state) => {
      state.message = initialState.message;
    },
    setErrorMessage: (state, action) => {
      state.message = action.payload;
    }
  }
});

export const { resetErrorState, resetErrorMessage, setErrorMessage } = errorSlice.actions;
export default errorSlice.reducer;