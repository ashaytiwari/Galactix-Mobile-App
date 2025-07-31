import { combineReducers } from "@reduxjs/toolkit";

import UIReducers from './slices/ui/UIReducers';
import UserProfileReducer from './slices/userProfile';

const rootReducer = combineReducers({
  ui: UIReducers,
  user: UserProfileReducer
});

export default rootReducer;