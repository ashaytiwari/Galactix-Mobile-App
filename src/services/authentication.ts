import { axiosClient } from "@axiosClient";

import { ISigninModel } from "@interfaces/models/authentication";

import { handleRESTServerInteractionError } from "@utilities/serviceHandlers";

class AuthenticationServices {

  loginUser = (params: ISigninModel) => async (dispatch: any) => {
    try {
      const response = await axiosClient.post('signin', params);

      const responseData = response?.data;

      if (responseData?.statusCode !== 200) {
        throw responseData;
      }

      return response;

    } catch (error) {
      handleRESTServerInteractionError(dispatch, error, true);
    }
  };

  logout = () => async (dispatch: any) => {
    try {
      const response = await axiosClient.post('logout');

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

export const authenticationServices = new AuthenticationServices();