// const a = 4;
// const b = 4;
// const c = 3;
// switch (a) {
//   case b:
//     console.log("égal à b");
//     break;
//   case c:
//     console.log("égal à c");
//     break;
//   default:
//     console.log("égal à r");
// }

// let a = 8

// for (let i = 0; i < a; i++) {
//   console.log("oklm")
// }

// let a = 3;
// while (a < 9) {
//   a++;
//   if (a === 7) {
//     continue;
//   } else if (a === 8) {
//     break;
//   }
//   console.log(a);
// }


// a = "Jean"
// b = "Paul"

// function checkName(name, name2) {
//   console.log(name === name2)
// }

let names = []

function addName(name) {
  names.push(name)
}

names.forEach((name) => {
  name += " va à la pêche"
} )
