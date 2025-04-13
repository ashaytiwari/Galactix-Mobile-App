import { combineReducers } from "@reduxjs/toolkit";

import statusbarReducer from './statusbar';

const uiReducers = combineReducers({
  statusbar: statusbarReducer,
});

export default uiReducers;