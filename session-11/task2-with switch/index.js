let score = prompt("Please enter your exam score");
let output = "";

switch (true) {
  case score == 100:
    mess = "Perfect score 🏆";
    break;
  case score < 100 && score >= 85:
    mess = "You Got an A 🎉";
    break;
  case score < 85 && score >= 75:
    mess = "You Got a B 🎉";
    break;
  case score < 75 && score >= 65:
    mess = "You Got a C 📃";
    break;
  case score < 65 && score >= 50:
    mess = "You Got a D 👌";
    break;
  case score < 50 && score >= 0:
    mess = "You Got an F 😟";
    break;
  case score > 100 || score < 0 || score == NaN:
    mess = "Invalid score ❌";
    break;
  default:
    mess = "Invalid ❌";
}

document.write(mess);
