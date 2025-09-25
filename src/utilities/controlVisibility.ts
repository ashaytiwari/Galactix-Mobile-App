import { MMKV, STORAGE_KEYS } from "./mmkvStorage";

export async function checkIsCommunityOwner(createdBy: string) {

  const userAuthDetails: any = await MMKV.getMapAsync(STORAGE_KEYS.USER_AUTH_DETAILS);

  if (createdBy !== userAuthDetails._id) {
    return false;
  }

  return true;
}

export async function checkIsUserGuestToCommunity(members: Array<string>, createdBy: string) {

  const userAuthDetails: any = await MMKV.getMapAsync(STORAGE_KEYS.USER_AUTH_DETAILS);

  // neither user is owner of the community or member of the community
  // then they considered as Guest

  const memberIndex = members.findIndex((member) => member === userAuthDetails._id);

  if (memberIndex < 0 && createdBy !== userAuthDetails._id) {
    return true;
  }

  return false;

}