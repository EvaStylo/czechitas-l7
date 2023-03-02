// Hodnoty null a undefined

const hesloUzivatel = prompt('Zadej heslo')
let message

if (hesloUzivatel === 'ahoj'){
    message = 'Správné heslo!'
}else{
    message = 'Špatně zadané heslo!'
}


let zprava = document.querySelector('.msg')


if (zprava === null) { // stéjně můžeme ověřovat undefined
    alert ('Element neexistuje nelze předat zprávu')
}else{
    zprava.textContent = message
}


// Speciální druhy funkcí
 
const funkceJedna = () => {
    return 1
}

const funkceDva = () => {
    return 2
}

const funkceTri = () => {
    return 3
}

const vypisFunkciJedna = () => {
    console.log(funkceJedna())
    console.log(funkceDva())
    console.log(funkceTri())
} // undefined

vypisFunkciJedna()

const showOrderSummary = (summary) => {
	const summaryElm = document.querySelector('#summary')

    /*
    summaryElm.innerHTML = `
    <div class="summary__count">Celkem položek: ${summary.count}</div>
    <div class="summary__sum">Částka: ${summary.sum}</div>`
    */

    /*
   if (summaryElm === null) {
    return false
   }else{
    summaryElm.innerHTML = `
    <div class="summary__count">Celkem položek: ${summary.count}</div>
    <div class="summary__sum">Částka: ${summary.sum}</div>
   `
    return true
   }
   */ 

}// undefined

let soupisInformaci = {count: 10, sum: 10000}

let vypisSummary = showOrderSummary(soupisInformaci) //undefined
