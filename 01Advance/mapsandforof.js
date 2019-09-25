let john = {
    name: 'I am john',
    age: 20,
    isActive: true,
}

let marry = {
    name: "I'm marry",
    age: 19, 
    isActive: false,
}

let sam = {
    name: `I'm sam`,
    age: 21,
    isActive: true,
}

let users = new Map()
users.set('john', john)
users.set('marry', marry)
users.set('sam', sam)

// console.log(users.size)
// console.log(users.get('john'))
// console.log(users.keys())
// console.log(users.values())

// for (const key of users.keys()) {
//     console.log(key)   
// }

// for (const value of users.values()) {
//     console.log(`Status of ${value.name} is ${value.isActive}`)
// }

// for (const [key, value] of users.entries()) {
//     console.log(`${key} = ${value.name}`)
// }

users.forEach((value, key) => console.log(`${key} = ${value.name}`))