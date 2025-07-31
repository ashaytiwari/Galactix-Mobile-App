import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUserProfileModel } from "@interfaces/models/users";

const initialState = {
  userProfile: {} as IUserProfileModel
};

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {

    updateUserProfile: (state: typeof initialState, action: PayloadAction<any>) => {
      state.userProfile = action.payload;
    }

  }
});

export const userProfileActions = userProfileSlice.actions;
export default userProfileSlice.reducer;