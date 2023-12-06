export const truncateString = (inputString: string, maxLength: number): string => {
  if (inputString.length > maxLength) {
    return inputString.substring(0, maxLength - 3) + '...';
  } else {
    return inputString;
  }
};
