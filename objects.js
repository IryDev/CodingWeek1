const student = {
    name: 'Alan',
    favoriteFood: 'Pizza',
    city: "Paris",
}

const allValues = Object.values(student)
let counter = 0
allValues.forEach(
    (value) => {
        counter += value.length
    }
)

console.log(counter % 2 === 0 ? "even" : "odd")
