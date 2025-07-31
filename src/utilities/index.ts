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