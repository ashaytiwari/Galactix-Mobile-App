export interface IPostModel {
  _id: string,
  postTitle: string,
  postContent: string,
  communityId: string,
  createdBy: string,
  isActive: boolean,
  postImage: {
    name: string,
    uniqueName: string,
    url: string
  },
  reactions: Array<{
    reactionType: string,
    reactBy: string
  }>,
  createdAt: string,
  updatedAt: string,
  userDetails: {
    _id: string,
    firstName: string,
    lastName: string,
    email: string
  },
  reactionsCount: {
    starBurstCount: number,
    orbitBoostCount: number
  },
  userReaction: string | null
}

export interface IUpdatePostParamsModel {
  _id: string | number,
  postTitle: string,
  postContent: string,
  communityId: string,
  postImage?: {
    name: string,
    uniqueName: string,
  } | null
}

export interface IPostReactionModel {
  reactionType: string,
  reactionBy: {
    _id: string,
    firstName: string,
    lastName: string,
    email: string
  }
}

export interface IReactToPostModel {
  postId: string,
  reactionType: string,
  reactionBy: string
}

export interface ICoinsRewardedUpdateServerEventResponseModel {
  message: string,
  type: string,
  post: IPostModel,
  reactionType: string,
  reactionBy: string,
  coinsBalance: number,
  reward: number
}

export interface IDeletePostModel {
  postId: string
}