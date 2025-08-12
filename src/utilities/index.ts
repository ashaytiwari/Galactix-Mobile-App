import moment from "moment";

export function extractAvatarCharacters(value: string) {

  if (!value) {
    return '';
  }

  let avatarString = "";

  value.split(" ").slice(0, 2).map((item) => {
    avatarString = avatarString + item[0];
  });

  return avatarString;
}

export function getParsedRewardClaimingTimestamp(lastClaimedAt: Date) {

  if (!lastClaimedAt) {
    return null;
  }

  const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
  const lastClaimedAtInMS = new Date(lastClaimedAt).getTime();
  const currentDate = Date.now();

  const timeLeft = ONE_DAY_IN_MS - (currentDate - lastClaimedAtInMS);
  const timeLeftTimestamp = moment(timeLeft);

  const startOfDay = moment.utc(timeLeftTimestamp).startOf("day"); // Start of the day in UTC
  const endTime = moment.utc(timeLeftTimestamp);

  // Calculate duration in minutes
  const duration = moment.duration(endTime.diff(startOfDay));
  const hours = Math.floor(duration.asHours());
  const minutes = duration.minutes();

  if (timeLeft > 0) {
    return `${hours} hour(s) and ${minutes} minute(s)`;
  }

  return null;

}