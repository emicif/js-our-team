console.log('JS OK!');

/* Aggiungere un file js in cui definire *un array di oggetti* che rappresentano i membri del team. 
// Ogni membro ha le informazioni necessarie per stampare la relativa card: *Nome, Ruolo e Foto*.
// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html
// stampare dinamicamente una card per ogni membro del team.*/

// creare array di oggetto -> membri del team
    // team informazioni: Nome, ruolo e foto


// creare array di oggetto -> membri del team

//const team = ['Wayne Barnett', 'Angela Caroll', 'Walter Gordon', 'Angela Lopez', 'Scott Estrada', 'Barbara Ramos'];

//const ruolo = ['Founder & Ceo', 'Chief Editor', 'Office Manager', 'Social Media Manager', 'Developer', 'Graphic Designer'];


// creo il teams!
const teams = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & Ceo'
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor'
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager'
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager'
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer'
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer'
    }
];

// console.log(teams.nome); // se fosse solo object

// console.log([0]) // mi stampa 0

// console.log(teams[0]); // stampa il primo gruppo di graffe

// console.log((teams[0].nome)); // stampare solo il primo nome 


console.log((teams[0].nome));
console.log((teams[0].ruolo));
console.log('il secondo team è ' + (teams[1].nome) + ' ' + (teams[1].ruolo)); //stampo Angela Caroll Chief Editor

const card = document.getElementsByClassName('card-text');
card.innerHTML = ' ';

// ciclare per 6 card
cardComplete = [];
for (let i = 0; i < teams.length; i++) {
    const team = teams[i];
    cardComplete = team.nome + ' ' + team.ruolo;
    console.log('team nome è ' + cardComplete);
    
}
