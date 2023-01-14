export const getRandom = <T>(arr: T[], slice: number) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, slice);
};
