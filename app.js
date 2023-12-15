console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const numbers = [2, 22, 12, 17, 18, 39, 129];
// function arraySum(arr) {
//   let sum = 0;
//   arr.forEach((number) => {
//     sum += number;
//   });

//   return sum;
// }

// OR //

// function arraySum(arr) {
//   let sum = 0;

//   function accumulate(number) {
//     sum += number;
//   }

//   arr.forEach(accumulate);

//   return sum;
// }

// OR //

// reduce method //
function arraySum(arr) {
  return arr.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

console.log(arraySum(numbers));
console.log(arraySum([1, 2, 3, 4, 5]));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
let favBook = {};

favBook.title = "Phantastes";
favBook.author = "George McDonald";
favBook.pageCount = 323;
favBook.readCount = 1;

console.log(favBook);

// favBook.info = function () {
//   return `${this.title} by ${this.author} is ${this.pageCount} page(s) and has been
//     read ${this.readCount} time(s).`;
// };

function info() {
  return `${this.title} by ${this.author} is ${this.pageCount} page(s) and has been 
    read ${this.readCount} time(s).`;
}

favBook.info = info;

console.log(favBook.info());

let favBook2 = {
  title: "Voyage of the Dawn Treader",
  author: "C. S. Lewis",
  pageCount: 256,
  readCount: 1,
  info,
};

console.log(favBook2.info());

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let sentence = "The quick brown fox jumps over the lazy dog";

function reverseWords(sentence) {
  //   let result = [];
  //   // Identify words based on spaces
  //   let words = sentence.split(" ");
  //   console.log(words);
  //   for (let i = 0; i < words.length; i++) {
  //     let letters = words[i].split("");
  //     letters.reverse(); // words[i].split("").reverse();
  //     let reverseWord = letters.join("");
  //     result = result.concat(reverseWord); // adds to last value of an array
  //   }
  //   return result.join(" ");

  // OR //

  let words = sentence.split(" ");
  console.log(words);

  let result = words.map((word) => {
    let letters = word.split("");
    letters.reverse(); // words[i].split("").reverse();
    return letters.join("");
  }); // turns "word" into an array after a change has been made to the characters

  return result.join(" ");
}

console.log(reverseWords(sentence));

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26"; // "Comma seperated values"

// function csvConverter(data) {
//   // Return an array of objects
//   let headers = data.slice(0, data.indexOf("\n")).split(","); // ["name", "age"]

//   let valuesList = data.slice(data.indexOf("\n") + 1).split("\n");

//   const output = valuesList.map((row) => {
//     let values = row.split(",");
//     let obj = {};

//     values.forEach((value, idx) => {
//       if (idx < headers.length) {
//         obj[headers[idx]] = value;
//       } else {
//         obj[`misc${idx}`] = value;
//       }
//     });

//     return obj;
//   });

//   return output;
// }

// console.log(csvConverter(csvData));

//  "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26"; //
// Headers: name, age
// Row ex: Frodo, 50
function converter(fileData) {
  // first, what are the headers, get them from first row in fileData
  // split fileData into rows based on every newline character (first row is headers)
  let rows = fileData.split("\n");
  // split first row based on ","
  let headers = rows[0].split(",");

  let result = [];
  for (let i = 1; i < rows.length; i++) {
    let obj = {};
    let data = rows[i].split(","); // ex ["Frodo", 50]
    data.forEach((val, idx) => {
      obj[headers[idx]] = val;
    });
    result.push(obj);
  }
  return result;
}

console.log(converter(csvData));
