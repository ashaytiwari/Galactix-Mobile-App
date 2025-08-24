import { IPostModel } from "@interfaces/models/posts";

export interface ICommunityRoomStateModel {
  posts: Array<IPostModel>,
  page: number,
  loading: boolean,
  hasMore: boolean
}

export interface IPostTileProps {
  post: IPostModel,
  isUserGuestToCommunity: boolean,
  communityCreatedBy: string
}

export interface ICommunityPostEditorProps {
  open: boolean,
  post: IPostModel | null,
  onClose: () => void,
  onOpenChange: () => void
}

export interface IPostReactionsModalProps {
  open: boolean,
  postId: string,
  onClose: () => void,
  onOpenChange: () => void
}