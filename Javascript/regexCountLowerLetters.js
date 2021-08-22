function lowercaseCount(str){
  let lCount = 0;
  str.split("").forEach( l => {
    if (!(l.toUpperCase() === l)) {
      lCount++;
    }
  })
  return lCount;
}
