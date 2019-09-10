// let king = "john";

if(true){
    // console.log(king);
    if(true)
    {
        king = "Amar";//Not declaring explicitly make variable king global and leds to data leak
        console.log(king);
    }
}

if(true){
    console.log(king);//since it king is global variable it can be accesed throuout the program
}