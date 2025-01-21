import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rent: 0,
  electricity: 0,
  gas: 0
};

export const rentCalculatorSlice = createSlice({
  name: 'rentCalculator',
  initialState,
  reducers: {
    resetRentCalculatorState: (state) => {
      state = initialState;
    },
    setRent: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.rent = action.payload;
    },
    setElectricity: (state, action) => {
      state.electricity = action.payload;
    },
    setGas: (state, action) => {
      state.gas = action.payload;
    }
  }
});

export const { resetRentCalculatorState, setRent, setElectricity, setGas } = rentCalculatorSlice.actions;
export default rentCalculatorSlice.reducer;