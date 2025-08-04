import { ICommunityModel } from "@interfaces/models/communities";

export interface IExploreCommunitiesStateModel {
  communities: Array<ICommunityModel>,
  page: number,
  loading: boolean,
  hasMore: boolean,
  tab: string,
  textSearch: string
}