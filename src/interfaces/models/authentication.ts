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