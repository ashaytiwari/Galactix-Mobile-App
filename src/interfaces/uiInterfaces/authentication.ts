import { ISignupPrimaryInfoFormModel } from "@interfaces/models/authentication";

export interface ISignupSecurityInfoFormProps {
  primaryInfoFormDetails: ISignupPrimaryInfoFormModel,
  onBack: () => void
}

export interface ISignupSuccessModalProps {
  open: boolean,
  userDetails: any,
  onClose: () => void
}

export interface ISignupSecurityInstructionsModalProps {
  open: boolean,
  onClose: () => void
}