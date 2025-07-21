import messages from "@constants/messages";
import { IResetPasswordFormModel, IResetPasswordSecurityDetailsFormModel } from "@interfaces/models/authentication";

import { validateEmail, validatePassword } from "@utilities/formValidations";

export function validateResetPasswordEmailAddressForm(values: any) {

  const errors = {} as any;

  if (!values.email) {
    errors.email = messages.required;
  } else if (validateEmail(values.email) === true) {
    errors.email = messages.invalidEmail;
  }

  return errors;

}

export function validateResetPasswordSecurityDetailsForm(values: IResetPasswordSecurityDetailsFormModel) {

  const errors = {} as IResetPasswordSecurityDetailsFormModel;

  if (!values.securityAnswer) {
    errors.securityAnswer = messages.required;
  }

  return errors;

}

export function validateResetPasswordForm(values: IResetPasswordFormModel) {

  const errors = {} as IResetPasswordFormModel;

  if (!values.newPassword) {
    errors.newPassword = messages.required;
  } else if (validatePassword(values.newPassword) === true) {
    errors.newPassword = messages.passwordMustBeAtleast6Char;
  }

  return errors;

}