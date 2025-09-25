import { ICommunityModel } from "@interfaces/models/communities";

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