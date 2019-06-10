export const Question = () => Math.floor(Math.random() * (0, 100));
export const Answer = (s) => {
  const q = (s % 2 === 0) ? 'yes' : 'no';
  return q;
};
