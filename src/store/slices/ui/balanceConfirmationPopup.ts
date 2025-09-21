import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  open: boolean,
  actionAmount: number,
  title: string,
  message: string,
  onConfirmed?: (() => void) | null
}

const initialState: IInitialState = {
  open: false,
  actionAmount: 0,
  title: '',
  message: '',
  onConfirmed: null
};

const balanceConfirmationPopupSlice = createSlice({
  name: 'balanceConfirmationPopup',
  initialState,
  reducers: {

    updateBalanceConfirmationPopup: (state: IInitialState, action: PayloadAction<IInitialState>) => {

      const { title, message, open, actionAmount } = action.payload;

      state.title = title;
      state.message = message;
      state.open = open;
      state.actionAmount = actionAmount;

    },

    onConfirm: (state: IInitialState, action: PayloadAction<any>) => {

      if (action.payload) {
        action.payload();
      }

      state.open = false;
      state.actionAmount = 0;
      state.title = '';
      state.message = '';
      state.onConfirmed = null;
    },

    close: (state: IInitialState) => {
      state.open = false;
      state.actionAmount = 0;
      state.title = '';
      state.message = '';
      state.onConfirmed = null;
    }

  }
});

export const balanceConfirmationPopupAction = balanceConfirmationPopupSlice.actions;
export default balanceConfirmationPopupSlice.reducer;