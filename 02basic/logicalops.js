let iAmGlobal = "I am global";

if (true){
    var iAmLocal = "I am local";
    iAmLocal = "I am local updated";
    console.log(iAmGlobal);
    console.log(iAmLocal);
}

console.log(iAmLocal);