// Scrivi un programma che stampi in console i numeri da 1 a 100:
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e
// per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.



// bonus 1 
const containerElement = document.querySelector('div.container');

// 1 stampa i numeri da 1 a 100


for (let i = 1; i <= 100; i++) 
{
//    prima inserisco la condizione particolare affinché il codice possa andare avanti qual'ora non sia verificata 
   
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log(i + " FizzBuzz ");
        containerElement.append("FizzBuzz ");
    } else if (i % 3 == 0) {
        console.log(i + " Fizz");
        containerElement.append("Fizz ");
    } else if (i % 5 == 0) {
        console.log(i + " Buzz");
        containerElement.append("Buzz ");
    } else {
        console.log(i);
        containerElement.append( i );
    }

}

// bonus 
