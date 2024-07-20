const array = [
  8,
  "55",
  [
    2,
    "Hello World",
    {
      а: 2,
      b: 5,
    },
    false,
  ],
  {
    arr: [true, 1, NaN, new Array(2, 33)],
    test: null,
    obj: { d: "Moha", last: [2, false, undefined] },
  },
];

const [
  ,
  ,
  ,
  {
    obj: { d: mohaValue },
  },
] = array;
const [
  ,
  ,
  ,
  {
    arr: [, , , [, value33]],
  },
] = array;

let first = document.getElementById("string");
first.innerHTML = mohaValue;
let second = document.getElementById("number");
second.innerHTML = value33;
console.log("Moha:", mohaValue);
console.log("Value 33:", value33);
