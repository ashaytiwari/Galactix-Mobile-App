import authTypes from "@constants/authTypes";

import { ISignupPrimaryInfoFormModel } from "@interfaces/models/authentication";

export function setDefaultSignupFormValues(): ISignupPrimaryInfoFormModel {

  const values = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    authType: authTypes.IN_APP
  };

  return values;
}