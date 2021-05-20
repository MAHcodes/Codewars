function points(games) {
  let points = 0
  for (let i = 0; i < games.length; i++) {
    let game = games[i].split(":");
    if (game[0] > game[1]) {
      points += 3
    } else if (game[0] === game[1]) {
      points += 1
    };
  } return points;
}