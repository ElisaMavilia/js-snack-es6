/* SNACK 1
Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']
Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come attributi:
nome del tavolo (tableName),
nome dell'ospite (guestName),
posto occupato (place),
Generiamo e stampiamo in console la lista per i segnaposto. */

let vips = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'];

let guest = [
    {
        tableName: "Tavolo Vip",
        guestName: "Brad Pitt",
        place: 1
    }
]

vips.forEach((element, index) =>{
const table = [
    {
        tableName: "",
        guestName: "",
        place: ""
    }
]

table.filter (element => {
    return element.guestName == "";
})

console.log(table);
})



    

 
console.log("guests:", guest);




/* guest[1].guestName = 'Johnny Depp'; 
guest[1].place = 2;
guest[1].tableName = "Tavolo Vip";

guest[2].guestName = 'Lady Gaga';
guest[2].place = 3;
guest[2].tableName = "Tavolo Vip";

guest[3].guestName = 'Cristiano Ronaldo';
guest[3].place = 4;
guest[3].tableName = "Tavolo Vip";

guest[4].guestName = 'Georgina Rodriguez';
guest[4].place = 5;
guest[4].tableName = "Tavolo Vip";

guest[5].guestName = 'Chiara Ferragni';
guest[5].place = 6;
guest[5].tableName = "Tavolo Vip";

guest[6].guestName = 'George Clooney';
guest[6].place = 7;
guest[6].tableName = "Tavolo Vip";

guest[7].guestName = 'Amal Clooney';
guest[7].place = 8;
guest[7].tableName = "Tavolo Vip";

guest[8].guestName = 'Fedez';
guest[8].place = 9;
guest[8].tableName = "Tavolo Vip";

guest[9].guestName = 'Amadeus';
guest[9].place = 9;
guest[9].tableName = "Tavolo Vip";

guest[10].guestName = 'Fiorello';
guest[10].place = 10;
guest[10].tableName = "Tavolo Vip"; 
 */





