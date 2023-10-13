let users = ["Stéphanie", "Gaia", "Etienne", "Michel", "Roberto", "Julie"]

function countCharacter(value){
    return value.length
}

users.forEach(
    (user) => {
        if(countCharacter(users) < 5){
            console.log("This user has a short name")
        } else {
            console.log("This user has a long name")
        }
    }
)