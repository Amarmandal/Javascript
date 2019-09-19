

// const index = myTodos.findIndex(function(title, index){
//     return title.name === 'jane'
// })
// console.log(index)

//Method 1
// const findTodo = function(myTodos, title){
//     const index = myTodos.findIndex(function(todo, index){
//         return todo.name.toLowerCase() === title.toLowerCase()
//     })
//     return myTodos[index];
// }
// console.log(findTodo(myTodos, 'jaNe'))

//Method 2
const myTodos = [{
    name: 'amar',
    age: 10,
}, {
    name: 'Jane',
    age: 20,
}]
const findTodo = function(myTodos, title){
    const nameRetured = myTodos.find(function(todos){
        return todos.age > 12;
    })
    return nameRetured;
}

console.log(findTodo(myTodos, 'jane'))