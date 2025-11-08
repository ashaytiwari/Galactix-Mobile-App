import { getCommunitiesRequestTypes } from "@constants/getCommunitiesRequestTypes";

export function getFilterInformationLabel(tab: string) {

  let message = 'Communities you can join!';

  if (tab === getCommunitiesRequestTypes.JOINED) {
    message = 'Communities you have joined!';
  }

  if (tab === getCommunitiesRequestTypes.CREATED_BY_ME) {
    message = 'Communities you have created!';
  }

  return message;
}

export function checkUserAlreadyRequestedToJoinCommunity(userId: string, communityPendingMembers: Array<string>) {
  const isRequested = communityPendingMembers.includes(userId);
  return isRequested;
}