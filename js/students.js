/* SNACK 2
Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
Buon pomeriggio e buon lavoro !!! :faccia_nerd:
Questo è l'elenco degli studenti:
Id  Name                Grades
213 Marco della Rovere      78
110 Paola Cortellessa       96
250 Andrea Mantegna         48
145 Gaia Borromini          74
196 Luigi Grimaldello       68
102 Piero della Francesca   50
120 Francesca da Polenta    84 */


// Esercizio 1
const students = ["Marco della Rovere", "Paola Cortellessa", "Andrea Mantegna", "Gaia Borromini", "Luigi Grimaldello", "Piero della Francesca", "Francesca da Polenta"];

const NewArray = students.map ((element) => {
    let newList = {
        nome: element
    }
    return newList.nome.toUpperCase();
})
console.log(NewArray);

// Esercizio 2: creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70

const studentsList = [
    {
        name: "Marco della Rovere",
        id: 213,
        grade: 78
    },

    {
        name: "Paola Cortellessa",
        id: 110,
        grade: 96
    },

    {
        name: "Andrea Mantegna",
        id: 250,
        grade: 48
    },

    {
        name: "Gaia Borromini",
        id: 145,
        grade: 74
    },

    {
        name: "Luigi Grimaldello",
        id: 196,
        grade: 68
    },

    {
        name: "Piero della Francesca",
        id: 102,
        grade: 50
    },

    {
        name: "Francesca da Polenta",
        id: 120,
        grade: 84
    }
]

const studentsInfo = studentsList.filter (element => {
    return element.grade > 70;
})
console.log(studentsInfo);
