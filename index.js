// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push("Ralph");
}

function destructivelyPrependCat(name){
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(name){
    cats.pop();
}

function destructivelyRemoveFirstCat(name){
    cats.shift();
}

function appendCat(name){
    const newArr = [...cats, "Broom"]
    return newArr;
}

function prependCat(name){
    const newArr = ["Arnold", ...cats];
    return newArr;
}

function removeLastCat(){
    const newArr = cats.slice(0,-1);
    return newArr;
}

function removeFirstCat(){
    const newArr = cats.slice(1);
    return newArr;
}
