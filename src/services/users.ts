import { axiosClient } from "@axiosClient";
import { userProfileActions } from "@store/slices/userProfile";

import { handleRESTServerInteractionError } from "@utilities/serviceHandlers";

class UsersServices {

  getUserProfile = () => async (dispatch: any) => {
    try {

      const response = await axiosClient.get('getUserProfile');

      const responseData = response?.data;

      if (responseData?.statusCode !== 200) {
        throw responseData;
      }

      dispatch(userProfileActions.updateUserProfile(responseData?.data));

      return response;

    } catch (error) {
      handleRESTServerInteractionError(dispatch, error, true);
    }
  };

  claimDailyReward = () => async (dispatch: any) => {
    try {
      const response = await axiosClient.post('claimDailyReward');

      const responseData = response?.data;

      if (responseData?.statusCode !== 200) {
        throw responseData;
      }

      return response;

    } catch (error) {
      handleRESTServerInteractionError(dispatch, error);
    }
  };

}

export const usersServices = new UsersServices();