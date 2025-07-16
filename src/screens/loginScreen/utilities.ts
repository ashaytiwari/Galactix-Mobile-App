import authTypes from "@constants/authTypes";
import messages from "@constants/messages";

import { ISigninModel } from "@interfaces/models/authentication";

import { validateEmail, validatePassword } from "@utilities/formValidations";

export function setDefaultSigninFormValues(): ISigninModel {

  const data = {
    email: '',
    password: '',
    authType: authTypes.IN_APP
  };

  return data;
}

export function validateSigninForm(values: ISigninModel) {

  const errors = {} as ISigninModel;

  if (!values.email) {
    errors.email = messages.required;
  } else if (validateEmail(values.email) === true) {
    errors.email = messages.invalidEmail;
  }

  if (!values.password) {
    errors.password = messages.required;
  } else if (validatePassword(values.password) === true) {
    errors.password = messages.passwordMustBeAtleast6Char;
  }

  return errors;
}