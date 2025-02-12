export default function genUID() {
  return Math.random().toString(16).split(".")[1];
}