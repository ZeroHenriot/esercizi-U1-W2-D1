/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(
  'I principali datatype in JS sono: String, Number, Boolean, Undefined e Null.'
)
console.log(
  'String: indica una sequenza di caratteri ed è delimitata da doppi apici ( "" ) oppure dai singoli apici ( \'\' ) '
)
console.log(
  'Number: indica un numero e per assegnarlo il numero NON deve essere racchiusto tra "" oppure \'\'. Può essere intero o decimale, il decimale va però indicato con il punto (.)'
)
console.log(
  'Boolean: ha solo due valori -> true o false ed è utile per far prendere decisioni'
)
console.log(
  'Undifined: indica una variabile che non ha un valore assegnato oppure definita'
)
console.log("Null: indica l'assenza intenzionale di un oggetto ")

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let firstName = 'Catalin'
console.log(firstName)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let number1 = 12
let number2 = 20
let number3 = number1 + number2
console.log(number3)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12
console.log(x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
firstName = 'Darii'
console.log(firstName)

// const lastName = 'Darii'
// lastName = 'Catalin'

// cercando di cambiare una variabile const in console si avrà il seguente errore: Uncaught TypeError: invalid assignment to const 'lastName'

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
let subtraction = 4 - x
console.log(subtraction)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = 'john'
let name2 = 'John'

console.log(name1 !== name2)
console.log(name1.toLowerCase() === name2.toLowerCase())
