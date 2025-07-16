import { combineReducers } from "@reduxjs/toolkit";

import statusbarReducer from './statusbar';
import appPopupReducer from './appPopup';

const uiReducers = combineReducers({
  statusbar: statusbarReducer,
  appPopup: appPopupReducer
});

export default uiReducers;