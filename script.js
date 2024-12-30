const form = document.querySelector('.form-quizz');
let tableauResultats = [];
const reponses = ['c', 'a', 'b', 'a', 'c'];
const emojis = ['✅', '⭐', '👀', '😭', '👎'];
const titreResultats = document.querySelector('.resultats h2');
const aideResultat = document.querySelector('.aide');
const notesResultat = document.querySelector('.note');
const touteslesQuestions = document.querySelectorAll('.question-block');
let verifTableau = [];


form.addEventListener('submit', (e) => {
    e.preventDefault();
    for (i = 1; i < 6; i++) {
        tableauResultats.push(document.querySelector(`input[name="q${i}"]:checked`).value)
    }
    verifFunction(tableauResultats);
    tableauResultats = [];

})
function verifFunction(tabResultats) {
    for (let a = 0; a < 5; a++) {
        if (tabResultats[a] === reponses[a]) {
            verifTableau.push(true);
        } else {
            verifTableau.push(false);
        }
    }
    /* console.log(verifTableau); */
    afficherResultat(verifTableau);
    couleursFonction(verifTableau)
    verifTableau = [];

}

function afficherResultat(tabCheck) {
    const nbFautes = tabCheck.filter(el => el !== true).length;
    console.log(nbFautes);

    switch (nbFautes) {
        case 0:
            titreResultats.innerText = `${emojis[0]} Bravo, un parcours sans fautes`;
            aideResultat.innerText = '';
            notesResultat.innerText = '5/5';
            break;

        case 1:
            titreResultats.innerText = `${emojis[1]} Vous y etes presque !`;
            aideResultat.innerText = 'Retentez une autre réponse dans la case rouge puis revalidez';
            notesResultat.innerText = '4/5';
            break;

        case 2:
            titreResultats.innerText = `${emojis[2]} Encore un effort`;
            aideResultat.innerText = 'Retentez une autre réponses dans les cases rouges';
            notesResultat.innerText = '3/5';
            break;
        case 3:
            titreResultats.innerText = `${emojis[3]} Il reste quelques erreurs`;
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges';
            notesResultat.innerText = '2/5';
            break;
        case 4:
            titreResultats.innerText = `${emojis[4]} Peut mieux faire`;
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges';
            notesResultat.innerText = '1/5';
            break;
        case 5:
            titreResultats.innerText = `${emojis[5]} Peut mieux faire !`;
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges ';
            notesResultat.innerText = '0/5';
            break;
        default:
            `Ce cas n'est pas traitable ......`
    }
}

function couleursFonction(tabValsBool){
    for(let j =0; j < tabValsBool.length; j++){
        if(tabValsBool[j]===true){
            touteslesQuestions[j].style.background='lightgreen';
        }else{
            touteslesQuestions[j].style.background = ' #ffb8b8';
            touteslesQuestions[j].classList.add('echec');

            setTimeout(()=>{
                touteslesQuestions[j].classList.remove('echec');  
            },500)
        }
    }
} 
touteslesQuestions.forEach(item =>{
    item.addEventListener('click',()=>{
        item.style.background='white';
    })
})