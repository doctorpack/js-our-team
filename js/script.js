
let container = document.querySelector(".team-container");
// creo un array di oggetti che contiene NamedNodeMap,ruolo e immagine
let teamMembers = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        photo: "img/wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        photo: "img/angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        photo: "img/walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "SMM",
        photo: "img/angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        photo: "img/scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        photo: "img/barbara-ramos-graphic-designer.jpg"
    }
]
generatormembers();
// chiamo la funzione members generatormembers

// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html, stampare dinamicamente una card per ogni membro del team.

function generatormembers(){
    // scorro con un ciclo for l'array di oggetti
    for(let i = 0; i < teamMembers.length; i++){
        // newCard contiene il codice HTML che andrò ad inserire nel file index.html
        let newCard = 
        `<div class="team-card">
                <div class="card-image">
                    <img src="${teamMembers[i].photo}">
                </div>
                <div class="card-text">
                    <h3>${teamMembers[i].name}</h3>
                    <p>${teamMembers[i].role}</p>
                </div>
            </div>`
            // inserisco nel file HTML il contenuto di newcard
        container.innerHTML += newCard;
    }
}

