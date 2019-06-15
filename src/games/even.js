export default () => {
  const number = Math.floor(Math.random() * (0, 100));
  const answer = (number % 2 === 0) ? 'yes' : 'no';
  return `${number}|${answer}`;
};
