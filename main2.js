// Obor platnosti proměnných


/*

const wage = Number(prompt('Zadej svoji hodinovou mzdu:')) 
const hours = Number(prompt('Zadej kolik hodin denně pracuješ:')) 
const days = Number(prompt('Zadej kolik dní v měsíci pracuješ:')) 

const salary = (wage, hours, days) => {
	return Math.round(wage * hours * days)
}

const taxPercentage = Number(prompt('Zadej procento zdanění v %, např. 15:')) 
const taxed = (salary, taxPercentage) => {
	return Math.round((salary * (100 - taxPercentage)) / 100)
}

const beforeTaxation = salary(wage, hours, days)
const afterTaxation = taxed(beforeTaxation, taxPercentage)

document.body.innerHTML += `
	<h3>Výplata:</H3>
	<p>Hodinová mzda: ${wage} Kč</p>
	<p>Odpracováno hodin za den: ${hours}</p>
	<p>Odpracovaných dnů v měsíci: ${days}</p>
	<p>Hrubá mzda: ${beforeTaxation} Kč</p>
	<p>Čistá mzda: ${afterTaxation} Kč</p>  `  */

	const number1 = Number(prompt('Zadej první číslo:')) 
	const number2 = Number(prompt('Zadej druhé číslo:')) 
	const operator = prompt('Zadej matematický operátor (+, -, *, /):')

	const calculate = (number1, operator, number2) => {
		if (operator === '+') {
			return number1 + number2
		}
		if (operator === '-') {
			return number1 - number2
		}
		if (operator === '*') {
			return number1 * number2
		}
		if (operator === '/') {
			return number1 / number2
		}
	}

	const vysledek = calculate(number1, operator, number2)

	document.body.innerHTML += `
	<h3>Kalkulačka:</H3>
	<p>${number1} ${operator} ${number2} = ${vysledek}</p>
	 `

