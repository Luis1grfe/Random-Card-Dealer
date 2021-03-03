window.onload = () =>{
    document.querySelector('.cardPoker').classList.add(generateSuit());
    document.querySelector('.cardPoker .fontCard').innerHTML = (generateNumber());

};

let generateNumber = () =>{ 
    let numbers = ["A","2","3","4","5","7","8","9","10","J","Q","K"];
    let indexNumbers = Math.floor(Math.random()*numbers.length);
    return numbers[indexNumbers];
}
let generateSuit = () =>{
    let suit = ["diamond","spade","heart","club"];
    let indexSuit = Math.floor(Math.random()*suit.length);
    return suit[indexSuit];
}