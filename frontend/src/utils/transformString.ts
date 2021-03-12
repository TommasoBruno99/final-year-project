export const transformFirstLetterUppercase = (name: string): string => {
  let firstLetter = name[0].toUpperCase();

  let newName = firstLetter;
  for (let i = 1; i < name.length; i++) {
    newName += name[i];
  }

  return newName;
};
