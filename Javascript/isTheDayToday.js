function isToday(date) {
  const now = new Date();
  return now.getDate() === date.getDate() && now.getFullYear() === date.getFullYear() && now.getMonth() === date.getMonth();
}