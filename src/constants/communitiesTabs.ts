import { getCommunitiesRequestTypes } from "./getCommunitiesRequestTypes";

const communityTabs = [
  {
    name: 'Discover',
    value: getCommunitiesRequestTypes.EXPLORE_COMMUNITIES
  },
  {
    name: 'My Communities',
    value: getCommunitiesRequestTypes.JOINED
  },
  {
    name: 'Hosted',
    value: getCommunitiesRequestTypes.CREATED_BY_ME
  }
];

export default communityTabs;