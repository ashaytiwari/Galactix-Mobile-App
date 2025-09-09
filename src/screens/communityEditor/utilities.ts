import messages from "@constants/messages";
import { ICommunityEditorDataModel } from "@interfaces/models/communities";

export function setDefaultCommunityFormValues(): ICommunityEditorDataModel {

  const data = {
    _id: 0,
    communityName: '',
    communityDescription: '',
    profileImage: null,
    isPrivate: false
  };

  return data;
}

export function validateCommunityForm(values: ICommunityEditorDataModel) {

  const errors = {} as ICommunityEditorDataModel;

  if (!values.communityName) {
    errors.communityName = messages.required;
  }

  if (!values.communityDescription) {
    errors.communityDescription = messages.required;
  }

  return errors;

}