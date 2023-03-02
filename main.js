// Obor platnosti proměnných

const age = Number(prompt('Zadej svůj věk:')) // Globální obor platnosti 

/*
if (age < 18) {
	const remains = 18 - age

	if (remains >= 2) {
		document.body.innerHTML = '<p>Už to máš za pár</p>'
	} else if (remains >= 5) {
		document.body.innerHTML = `<p>${age}</p>` // V pořádku
		document.body.innerHTML += `<p>Ještě si počkáš ${remains} let</p>`
	} else {
		document.body.innerHTML = '<p>Utíkej za mamkou</p>'
	}
} else {
	document.body.innerHTML = `<p>${age}</p>` // V pořádku
	document.body.innerHTML += '<p>Vítej mezi dospěláky</p>'
}

document.body.innerHTML = `<p>${age}</p>` // V pořádku
*/

const superMessage = 'moje super zpráva'

if (age < 18) {
	const message = 'Utíkej za mamkou' // lokální obor platnosti
	document.body.innerHTML = `<p>${message}</p>`
    
    console.log(message)
} else {
	const message = 'Vítej mezi dospěláky' // lokální obor platnosti
	document.body.innerHTML = `<p>${message}</p>`
    console.log(message)
}

const message = 'Vítej ve světě slasti'

const checkAge = (age, message) => {
    if(age < 18) {
        return message
    }else{
        const message = 'Vítej mezi dospěláky'
        return message
    }
}

