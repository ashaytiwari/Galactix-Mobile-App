export interface ISignupModel {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  authType: string,
  securityQuestion?: string,
  securityAnswer?: string
}

export interface ISignupPrimaryInfoFormModel {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  authType: string
}

export interface ISignupSecurityInfoFormModel {
  securityQuestion: string,
  securityAnswer: string
}

export interface ISigninModel {
  email: string,
  password: string,
  authType: string
}

export interface IResetPasswordSecurityDetailsFormModel {
  securityAnswer: string,
  email?: string
}

export interface IResetPasswordFormModel {
  email?: string,
  newPassword: string,
  securityCode?: string
}