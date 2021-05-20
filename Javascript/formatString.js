function list(names){
  let result = "";
  for (let i = 0; i < names.length; i++) {
    if (i === (names.length - 2)) {
      result += names[i].name + " & "
    } else if (i === names.length - 1) {
      result += names[i].name
    } else if (i < (names.length - 2)) {
      result += names[i].name + ", "
    }
  } return result;
}