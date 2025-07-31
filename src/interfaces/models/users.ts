export interface IUserProfileModel {
  _id: string,
  firstName: string,
  lastName: string,
  email: string,
  authType: string,
  coins: number,
  lastDailyRewardClaimedAt: Date
}