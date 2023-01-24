export function charDots(string, charNumber = 24) {
  if (string.length > charNumber) {
    return (string = `${string.slice(0, charNumber)}...`);
  } else {
    return string;
  }
}
// console.log(charDots("sddfdsfsdfdsfdsfdsfdfdcdfdff"));
