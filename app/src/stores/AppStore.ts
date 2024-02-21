import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  username: string;
}

const initialState: AppState = {
  username: '',
};

export const AppSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    SetUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
  },
});

export const appReducer = AppSlice.reducer;
export const { SetUsername } = AppSlice.actions;
