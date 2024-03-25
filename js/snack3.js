/* Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal */

const bikes = [
    {
        brand: "Stiga",
        weight: 25
    },

    {
        brand: "Crescent",
        weigth: 12
    },

    {
        brand: "Monark",
        weigth: 16
    },

    {
        brand: "Atala",
        weigth: 22
    },

    {
        brand: "Mountain",
        weigth: 15
    },

    {
        brand: "Olympia",
        weigth: 21
    },

    {
        brand: "Moon",
        weigth: 18
    },
]

bikes.forEach((element, num ) =>{
    const [brand, weigth] = bikes;
    console.log(element, num);
})

/* function getLowest(total, num){
    return total - num
}

getLowest(weigth); */

/* bikes.filter(element =>{
    return element.weight < 
}) */