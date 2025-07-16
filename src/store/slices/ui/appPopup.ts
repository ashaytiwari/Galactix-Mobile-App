import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IAppPopupFooterControl } from "@interfaces/uiInterfaces/generic";

interface IInitialState {
  open: boolean,
  title: string,
  message: string,
  footerControls?: Array<IAppPopupFooterControl>,
  hideCloseButton?: boolean
}

const initialState: IInitialState = {
  open: false,
  title: '',
  message: '',
  footerControls: [],
  hideCloseButton: false
};

const appPopupSlice = createSlice({
  name: 'appPopup',
  initialState,
  reducers: {

    updateAppPopupState: (state: IInitialState, action: PayloadAction<IInitialState>) => {

      const { title, message, open, footerControls, hideCloseButton } = action.payload;

      state.title = title;
      state.message = message;
      state.open = open;
      state.footerControls = footerControls || [];
      state.hideCloseButton = hideCloseButton || false;
    },

    close: (state: IInitialState) => {
      state.open = false;
      state.title = '';
      state.message = '';
      state.footerControls = [];
      state.hideCloseButton = false;
    }

  }
});

export const appPopupAction = appPopupSlice.actions;
export default appPopupSlice.reducer;