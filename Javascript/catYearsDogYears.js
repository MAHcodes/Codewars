var humanYearsCatYearsDogYears = function(humanYears) {
  if (humanYears === 1) {
    return [humanYears, 15, 15]
  } else if (humanYears === 2) {
    return [humanYears, 24, 24]
  } else {
    let catYears = 24;
    let dogYears = 24;
    for (let i = 2; i < humanYears; i++) {
      catYears += 4;
      dogYears += 5;
    }
    return [humanYears, catYears, dogYears ];
  }
}