export function randomNum(minNum: number, maxNum: number) {
  switch (arguments.length) {
    case 1:
      return Math.floor(Math.random() * minNum + 1);
      break;
    case 2:
      return Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
      break;
    default:
      return 0;
      break;
  }
}

export const getPosition = () => {
  const fontSize = randomNum(40, 90);
  const top = randomNum(0, 100) + "%";
  const left = randomNum(0, 100) + "%";
  return { fontSize, top, left };
};