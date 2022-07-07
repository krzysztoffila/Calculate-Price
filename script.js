//Funkcja prinMessage
function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
//Funkcja Kalkulatora
function calculateChange(argPrice, argPaidAmount) {
    console.log('wywołano calculateChange')
    console.log('argumenty: ' + argPrice + ', ' + argPaidAmount);
    return (argPaidAmount - argPrice);
}

let change1 = calculateChange(13, 20);
printMessage('Do zapłaty 13zł, zapłacono 20zł, reszta: ' + change1);

let change2 = calculateChange(77, 100);
printMessage('Do zapłaty 77zł, zapłacono 100zł, reszta: ' + change2);

printMessage('Do zapłaty 49zł, zapłacono 50zł, reszta: ' + calculateChange(49, 50));
// Dwie opcje
let change3 = calculateChange(150, 200);{
    //Za pomocą zmiennej:
    printMessage('Do zapłaty 150zł, zapłacono 200, reszta: ' + change3);
    //Za pomocą wywołania funkcji:
    printMessage('Do zapłaty 150zł, zapłacono 200, reszta: ' + calculateChange(150,200));
}
