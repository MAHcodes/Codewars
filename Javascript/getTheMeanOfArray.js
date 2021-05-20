function getAverage(marks){
  let j = 0;
  for (let i = 0; i < marks.length; i++) {
    j += marks[i];
  } return Math.floor(j/marks.length);
}