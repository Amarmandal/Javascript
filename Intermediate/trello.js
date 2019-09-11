const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug']

// months.forEach(function(month, index){
//     console.log(`${index+1} -- ${month}`)
// }
// )

//forEach loop
// const workRem = ['Exercise', 'Reading Newspaper', 'shopping', 'Batthing']

// console.log('Remaining works are:')
// workRem.forEach(function(remaining, index){
//     console.log(`${index + 1} -- ${remaining}`)
// }

// For each loop in javascript
// for(let i=months.length-1; i>=0; i--)
// {
//     console.log(months[i])
// }

const toDo = []
toDo.unshift('Buying Bread')
toDo.unshift('Wake up')
toDo.unshift('Sleep')
toDo.unshift('Brush after dinner')

for(let i=0; i<toDo.length;i++)
{
    console.log(`Your task: ${i+1} is: ${toDo[i]}`)
}