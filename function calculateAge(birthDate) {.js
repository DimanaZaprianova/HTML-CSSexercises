function calculateAge(birthDate) {
  var today = new Date();
//   var birthDate = new Date(year, month, day);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};  
    
function stringToDate(dateString) {
    var parts; 
    if (dateString.split("-")) {
        parts = dateString.split("-");
    } else if (dateString.split(" ")){ 
        parts = dateString.split(" ");
        console.log(parts);
    } else if (dateString.split(".")){
        parts = dateString.split(".");
    } else {console.log("Invalid date string");
    };
    return new Date(parts[0], parts[1] - 1, parts[2]);
  };

let x=stringToDate("1972 11 18")
console.log(x);
      
let y=calculateAge(x);
console.log(y);

