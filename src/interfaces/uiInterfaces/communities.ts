import { ICommunityModel, IMemberDetailModel } from "@interfaces/models/communities";

export interface IExploreCommunitiesStateModel {
  communities: Array<ICommunityModel>,
  page: number,
  loading: boolean,
  hasMore: boolean,
  tab: string,
  textSearch: string
}

export interface ICommunityTileModel {
  community: ICommunityModel,
  callingFrom: string,
  onPress: (community: ICommunityModel) => void
}

export interface IHomeCommunitiesChatListStateModel {
  communities: Array<ICommunityModel>,
  page: number,
  loading: boolean,
  hasMore: boolean,
  textSearch: string
}

export interface ICommunityRoomHeaderProps {
  community: ICommunityModel,
  onBack: () => void
}

export interface ICommunityMemberTileProps {
  member: IMemberDetailModel,
  communityCreatedBy?: string,
}

export interface ICommunityEditorProps {
  communityDetails?: ICommunityModel,
  onEditClose?: () => void
}

export interface ICommunityJoiningRequestsProps {
  communityId: string,
  onClose: () => void
}