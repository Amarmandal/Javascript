let str = 'We are enjoying.We are having fun.We are the one who help each other'
let pos = 0
while(true){
    pos = str.indexOf('are', pos)
    if(pos == -1) break;
    console.log(`Found at ${pos}`)
    pos = pos + 1;
}