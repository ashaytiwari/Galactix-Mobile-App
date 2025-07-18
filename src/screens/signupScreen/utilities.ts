import authTypes from "@constants/authTypes";
import messages from "@constants/messages";

import { ISignupPrimaryInfoFormModel, ISignupSecurityInfoFormModel } from "@interfaces/models/authentication";

import { validateEmail, validatePassword } from "@utilities/formValidations";

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

export function setDefaultSignupSecurityInfoFormValues(): ISignupSecurityInfoFormModel {

  const data = {
    securityQuestion: '',
    securityAnswer: ''
  };

  return data;
}

export function validateSignupPrimaryInfoForm(values: ISignupPrimaryInfoFormModel) {

  const errors = {} as ISignupPrimaryInfoFormModel;

  if (!values.firstName) {
    errors.firstName = messages.required;
  }

  if (!values.lastName) {
    errors.lastName = messages.required;
  }

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

export function validateSignupSecurityInfoForm(values: ISignupSecurityInfoFormModel) {

  const errors = {} as ISignupSecurityInfoFormModel;

  if (!values.securityQuestion) {
    errors.securityQuestion = messages.required;
  }

  if (!values.securityAnswer) {
    errors.securityAnswer = messages.required;
  }

  return errors;
}