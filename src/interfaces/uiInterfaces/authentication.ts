import { ISignupModel, ISignupPrimaryInfoFormModel } from "@interfaces/models/authentication";

export interface ISignupSecurityInfoFormProps {
  primaryInfoFormDetails: ISignupPrimaryInfoFormModel,
  onBack: () => void
}

export interface ISignupSuccessModalProps {
  open: boolean,
  userDetails: ISignupModel,
  onClose: () => void
}

export interface ISignupSecurityInstructionsModalProps {
  open: boolean,
  onClose: () => void
}