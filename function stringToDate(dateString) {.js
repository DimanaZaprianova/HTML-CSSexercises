function stringToDate(dateString) {
  var parts = dateString.split("-");
  return new Date(parts[0], parts[1] - 1, parts[2]);
};

console.log(stringToDate("1972-11-18"));
