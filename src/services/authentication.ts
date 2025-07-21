import { axiosClient } from "@axiosClient";

import { IResetPasswordFormModel, IResetPasswordSecurityDetailsFormModel, ISigninModel, ISignupModel } from "@interfaces/models/authentication";

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

  registerUser = (params: ISignupModel) => async (dispatch: any) => {
    try {
      const response = await axiosClient.post('signup', params);

      const responseData = response?.data;

      if (responseData?.statusCode !== 200) {
        throw responseData;
      }

      return response;

    } catch (error) {
      handleRESTServerInteractionError(dispatch, error);
    }
  };

  getUserSecurityDetails = (email: string) => async (dispatch: any) => {
    try {

      const response = await axiosClient.get(`getUserSecurityDetailsByEmail?email=${email}`);

      const responseData = response?.data;

      if (responseData?.statusCode !== 200) {
        throw responseData;
      }

      return response;

    } catch (error) {
      handleRESTServerInteractionError(dispatch, error, true);
    }
  };

  verifySecurityDetails = (params: IResetPasswordSecurityDetailsFormModel) => async (dispatch: any) => {
    try {
      const response = await axiosClient.post('verifyUserSecurityDetails', params);

      const responseData = response?.data;

      if (responseData?.statusCode !== 200) {
        throw responseData;
      }

      return response;

    } catch (error) {
      handleRESTServerInteractionError(dispatch, error);
    }
  };

  resetPassword = (params: IResetPasswordFormModel) => async (dispatch: any) => {
    try {
      const response = await axiosClient.post('resetPassword', params);

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