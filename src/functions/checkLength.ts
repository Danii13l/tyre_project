export const checkLength = (text: string): string => {
  return text.length > 270 ? text.slice(0, 270) + "..." : text;
};
