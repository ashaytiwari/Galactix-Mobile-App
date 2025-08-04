import { IPaginationMetadataModel } from "./common";

export interface IPaginatedCommunitiesResponseModel {
  records: Array<ICommunityModel>,
  pagination: IPaginationMetadataModel
}

export interface ICommunityModel {
  _id: string,
  communityName: string,
  communityDescription: string,
  createdBy: string,
  members: Array<string>,
  isPrivate: boolean,
  isActive: boolean,
  profileImage: {
    name: string,
    uniqueName: string,
    url: string
  },
  createdAt: Date,
  updatedAt: Date,
  pendingMembers: Array<string>,
  communitySize: number,
  lastActivity: {
    message: string,
    user: string,
    timestamp: Date
  }
}

export interface IJoinCommunityParamsModel {
  communityId: string
}

export interface ICommunityEditorDataModel {
  _id: string | number,
  communityName: string,
  communityDescription: string,
  isPrivate: boolean,
  profileImage: {
    name: string,
    uniqueName: string,
    url?: string
  } | null,
}

// export interface ICommunityContentUpdateServerEventResponseModel {
//   post: IPostModel,
//   ownerId: string
// }

export interface IPostDeletedServerEventResponseModel {
  postId: string,
  ownerId: string
}

export interface IMemberDetailModel {
  _id: string,
  firstName: string,
  lastName: string,
  email: string
}

export interface ICommunityMembersModel {
  _id: string,
  communityName: string,
  communityDescription: string,
  admin: IMemberDetailModel,
  members: Array<IMemberDetailModel>
}

export interface IHandleCommunityJoiningRequestParamsModel {
  communityId: string,
  action: string,
  requestUserId: string
}

export interface ICommunityPostsReactionsUpdateServerEventResponseModel {
  reaction: {
    reactionBy: string,
    reactionType: string
  },
  postId: string
}