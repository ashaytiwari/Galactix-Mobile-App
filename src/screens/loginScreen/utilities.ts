import authTypes from "@constants/authTypes";

import { ISigninModel } from "@interfaces/models/authentication";

export function setDefaultSigninFormValues(): ISigninModel {

  const data = {
    email: '',
    password: '',
    authType: authTypes.IN_APP
  };

  return data;
}