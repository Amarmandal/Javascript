let str = 'Javascript is amazing.Javascript is popular.Javascript is most flexible';
let target = 'is';
let pos = -1;
console.log(str.length)
while((pos = str.indexOf(target, pos + 1)) != -1)
{
    console.log(`${pos}`)
}