/*
Místo pro váš program

Formátování data
zapni hlavu
Bez použití knihovny dayjs napište funkci formatDate, která na vstupu obdrží objekt 
představující datum v následujícím formátu.

{ day: 12, month: 3, year: 2015 }

Funkce vrátí řetězec představující datum ve formátu DD.MM.YYYY. Příklad použití.

*/


const formatDate = (datum) => {
    let den = String(datum.day)
    let mesic = String(datum.month)
    let rok = String(datum.year)
    
    //let upraveny_den = den.toString()
    //let upraveny_mesic = mesic.toString()
    //let upraveny_rok = rok.toString()

    return den.padStart(2,'0') + '.' + mesic.padStart(2,'0') + '.' + rok.padStart(4,'20')
}

let mojeDatum = { day: -11, month: 13, year: 24 }

console.log(formatDate(mojeDatum))

