
const a = "Jean";
const b = "Paul";
let result = "";

function checkName(name1, name2){
    return name1 === name2 ? "les 2 prénoms sont les mêmes": "les 2 prénoms sont différents";
}

result = checkName(a, b);

console.log(result);