let score = prompt("please enter your exam score");

if (score < 100 && score >= 85) {
  document.write("You Got a A 🎉");
} else if (score < 85 && score >= 75) {
  document.write("You Got a B 🎉 ");
} else if (score < 75 && score >= 65) {
  document.write("You Got a C 📃");
} else if (score < 65 && score >= 50) {
  document.write("You Got a D 👌");
} else if (score < 50 && score >= 0) {
  document.write("You Got a F 😟");
} else if (score == NaN) {
  document.write("Not a number ❌");
} else if (score == 100) {
  document.write("perfect score 🏆");
} else if (score > 100 || score < 0) {
  document.write("invalid score ❌");
} else {
  document.write("invalid ❌");
}
