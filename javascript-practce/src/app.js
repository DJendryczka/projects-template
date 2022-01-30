const inputOne = document.querySelector(`.result`);



function printMassage(a, b){
     inputOne.innerHTML += ` ` + a + ` + ` + b + ` = ` + (a + b) ;
}
printMassage(10, 7);
console.log(inputOne)