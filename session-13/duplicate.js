const arrayy = [
  2,
  4,
  [22, "test"],
  false,
  null,
  { a: 2 },
  [22, "test"],
  "null",
];
const seenObjects = new Set();

function hasDuplicates(arr) {
  for (const item of arr) {
    if (typeof item !== "object" || item === null) {
      if (seenObjects.has(item)) {
        console.log(item);
        return true;
      }
      seenObjects.add(item);
      continue;
    }

    const key = JSON.stringify(item);

    if (seenObjects.has(key)) {
      console.log(key);
      return true;
    }

    seenObjects.add(key);
  }

  return false;
}

const hasDuplicatesResult = hasDuplicates(arrayy);

if (hasDuplicatesResult) {
  console.log("The array contains duplicates ");
} else {
  console.log("The array does not contain duplicates");
}

const output = document.getElementById("flat");
output.innerHTML = hasDuplicatesResult
  ? "array has duplicates"
  : "no duplicates found";
