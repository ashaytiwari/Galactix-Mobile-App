import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useAppDispatch } from "@hooks/redux";

import { appPopupAction } from "@store/slices/ui/appPopup";

import queryKeys from "@constants/queryKeys";
import messages from "@constants/messages";

import { IResetPasswordFormModel, IResetPasswordSecurityDetailsFormModel, ISigninModel, ISignupModel } from "@interfaces/models/authentication";

import { authenticationServices } from "@services/authentication";

import { MMKV, STORAGE_KEYS } from "@utilities/mmkvStorage";

export function useSigninUser() {

  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: (params: ISigninModel) => dispatch(authenticationServices.loginUser(params)),
    onSuccess: (response: any) => {

      const responseData = response?.data;

      if (responseData?.statusCode === 200) {
        MMKV.setMap(STORAGE_KEYS.USER_AUTH_DETAILS, responseData?.data);
      }

    }
  });
}

export function useLogout() {

  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: () => dispatch(authenticationServices.logout()),
    onSuccess: (response: any) => {

      const responseData = response?.data;

      if (responseData?.statusCode === 200) {
        MMKV.removeItem(STORAGE_KEYS.USER_AUTH_DETAILS);
      }

    }
  });
}

export function useSignupUser() {

  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: (params: ISignupModel) => dispatch(authenticationServices.registerUser(params))
  });
}

export function useGetUserSecurityDetails() {

  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();

  async function fetchUserSecurityDetails(email: string) {

    const data = await queryClient.fetchQuery({
      queryKey: [queryKeys.userSecurityDetails, email],
      staleTime: 0, // always call the api on execution
      queryFn: () => dispatch(authenticationServices.getUserSecurityDetails(email))
    });

    return data;
  }

  return fetchUserSecurityDetails;

}

export function useVerifyUserSecurityDetails() {

  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: (params: IResetPasswordSecurityDetailsFormModel) => dispatch(authenticationServices.verifySecurityDetails(params)),
  });
}

export function useResetPassword() {

  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: (params: IResetPasswordFormModel) => dispatch(authenticationServices.resetPassword(params)),
    onSuccess: (response: any) => {

      const responseData = response?.data;

      if (responseData?.statusCode === 200) {
        dispatch(appPopupAction.updateAppPopupState({
          title: 'Success',
          message: messages.resetPasswordSuccessMessage,
          open: true
        }));
      }

    }
  });
}