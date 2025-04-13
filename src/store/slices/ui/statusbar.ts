import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { statusBarStyles } from "@constants/statusBarStyles";

import { colors } from "@styles/colors";

interface IInitialState {
  statusBarStyle: any,
  backgroundColor: string,
  statusBarBackgroundColor: string
}

const initialState: IInitialState = {
  statusBarStyle: statusBarStyles.LIGHT_CONTENT,
  backgroundColor: colors.primaryBackground,
  statusBarBackgroundColor: colors.primaryBackground
};

const statusbarSlice = createSlice({
  name: 'statusbarUI',
  initialState,
  reducers: {

    updateStatusBarStates: (state: typeof initialState, action: PayloadAction<any>) => {
      state.statusBarBackgroundColor = action.payload.statusBarBackgroundColor;
      state.backgroundColor = action.payload.backgroundColor;
      state.statusBarStyle = action.payload.statusBarBackgroundColor;
    }

  }
});

export const statusbarActions = statusbarSlice.actions;
export default statusbarSlice.reducer;