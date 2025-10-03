import { ICommunityMembersModel } from "@interfaces/models/communities";

export function parseCommunityMembersList(membersList: ICommunityMembersModel) {
  const membersOnlyList = membersList?.members || [];
  const combinedList = [membersList.admin, ...membersOnlyList];
  return combinedList;
}