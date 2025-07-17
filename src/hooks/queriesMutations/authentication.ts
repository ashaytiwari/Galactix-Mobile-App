import { useMutation } from "@tanstack/react-query";

import { useAppDispatch } from "@hooks/redux";

import { ISigninModel } from "@interfaces/models/authentication";

import { authenticationServices } from "@services/authentication";

import { MMKV, STORAGE_KEYS } from "@utilities/mmkvStorage";

export function useSigninUser() {

  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: (params: ISigninModel) => dispatch(authenticationServices.loginUser(params)),
    onSuccess: (response: any) => {

      const responseData = response?.data;

      if (responseData?.statusCode === 200) {
        const data = responseData?.data;
        MMKV.setMap(STORAGE_KEYS.USER_AUTH_DETAILS, data);
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