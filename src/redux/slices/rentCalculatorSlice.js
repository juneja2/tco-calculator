import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rent: 0,
  water: 0,
  electricity: 0,
  gas: 0,
  internet: 0,
  trash: 0,
  sewer: 0
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
    setWater: (state, action) => {
      state.water = action.payload;
    },
    setElectricity: (state, action) => {
      state.electricity = action.payload;
    },
    setGas: (state, action) => {
      state.gas = action.payload;
    },
    setInternet: (state, action) => {
      state.internet = action.payload;
    },
    setTrash: (state, action) => {
      state.trash = action.payload;
    },
    setSewer: (state, action) => {
      state.sewer = action.payload;
    }
  }
});

export const {
  resetRentCalculatorState,
  setRent,
  setWater,
  setElectricity,
  setGas,
  setInternet,
  setTrash,
  setSewer
} = rentCalculatorSlice.actions;

export default rentCalculatorSlice.reducer;