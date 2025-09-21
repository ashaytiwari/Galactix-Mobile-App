import { combineReducers } from "@reduxjs/toolkit";

import statusbarReducer from './statusbar';
import appPopupReducer from './appPopup';
import balanceConfirmationPopupReducer from './balanceConfirmationPopup';

const uiReducers = combineReducers({
  statusbar: statusbarReducer,
  appPopup: appPopupReducer,
  balanceConfirmationPopup: balanceConfirmationPopupReducer
});

export default uiReducers;