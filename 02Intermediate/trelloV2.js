// Simple trello program

let myTodos = {
    day : 'mon',
    meeting : 0,
    meetDone : 0,
}

let newMeeting = function(todo, meet = 0){
    todo.meeting = todo.meeting + meet;
}

let comMeeting = function(todo, meet = 0){
    todo.meetDone = todo.meetDone + meet;
}

let daySummary = function(todo){
    let meetingLeft = todo.meeting - todo.meetDone;
    return `Your remaing meeting: ${meetingLeft}`;
}

let resetTodos = function(todo){
    todo.meeting = 0;
    todo.meetDone = 0;
}

newMeeting(myTodos, 5)
newMeeting(myTodos, 1)

comMeeting(myTodos, 4)

console.log(myTodos)
console.log(daySummary(myTodos))
resetTodos(myTodos)
console.log(myTodos)