export const calculate_age = (dob1) => {
  var today = new Date();
  var birthDate = new Date(dob1);
  var age = 0;
  var age_now = today.getFullYear() - birthDate.getFullYear();
  age += age_now * 12;
  var m = today.getMonth() - birthDate.getMonth();
  age += m;
  return age;
};
