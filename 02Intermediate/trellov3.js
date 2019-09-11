let myTodos = {
    day : 'mon',
    meeting : 0,
    meetDone : 0,

    addMeeting: function(num){
        this.meeting = this.meeting + num
    },

    comMeeting: function(num){
        this.meetDone = this.meetDone + num
    },

    daySummary: function(){
        return `Your remaining meeting ${this.meeting - this.meetDone}`
    },

    resetTodos: function(){
        this.meeting = 0
        this.meetDone = 0
    },
}

myTodos.addMeeting(4)
myTodos.comMeeting(2)
console.log(myTodos.daySummary())
myTodos.resetTodos()
console.log(myTodos)
