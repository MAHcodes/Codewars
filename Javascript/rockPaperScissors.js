const rps = (p1, p2) => {
  let i = {
    "paper" : {"paper" : 0, "rock" : 1, "scissors" : -1},
    "rock" : {"rock" : 0, "scissors" : 1, "paper" : -1},
    "scissors" : {"scissors" : 0, "paper" : 1, "rock" : -1}
};
  if (i[p1][p2] === 0) {
    return "Draw!"
  } else if (i[p1][p2] === 1) {
return "Player 1 won!"} else {return "Player 2 won!"}
}