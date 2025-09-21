import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  open: boolean,
  actionAmount: number,
  onConfirmed?: (() => void) | null
}

const initialState: IInitialState = {
  open: false,
  actionAmount: 0,
  onConfirmed: null
};

const balanceConfirmationPopupSlice = createSlice({
  name: 'balanceConfirmationPopup',
  initialState,
  reducers: {

    updateBalanceConfirmationPopup: (state: IInitialState, action: PayloadAction<IInitialState>) => {

      const { open, actionAmount, onConfirmed } = action.payload;

      state.open = open;
      state.actionAmount = actionAmount;
      state.onConfirmed = onConfirmed;

    },

    onConfirm: (state: IInitialState) => {

      if (state.onConfirmed) {
        state.onConfirmed();
      }

      state.open = false;
      state.actionAmount = 0;
      state.onConfirmed = null;
    },

    close: (state: IInitialState) => {
      state.open = false;
      state.actionAmount = 0;
      state.onConfirmed = null;
    }

  }
});

export const balanceConfirmationPopupAction = balanceConfirmationPopupSlice.actions;
export default balanceConfirmationPopupSlice.reducer;