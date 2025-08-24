export function isPostByAdmin(communityCreatedBy: string, postCreatedBy: string) {

  if (communityCreatedBy === postCreatedBy) {
    return true;
  }

  return false;
}