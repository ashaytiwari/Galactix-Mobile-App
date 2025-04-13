import { combineReducers } from "@reduxjs/toolkit";

import UIReducers from './slices/ui/UIReducers';

const rootReducer = combineReducers({
  ui: UIReducers
});

export default rootReducer;