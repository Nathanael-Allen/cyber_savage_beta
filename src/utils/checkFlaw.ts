export default function checkFlaw(numChars: number, hasFlaw: boolean) {
  if (hasFlaw) {
    return numChars + 1;
  } else {
    return numChars;
  }
}