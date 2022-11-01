
let prenom = sessionStorage.getItem('Prenom')
let nom = sessionStorage.getItem('Nom')
let nomProfil = document.querySelector('.nomProfil')
nom  && prenom ? nomProfil.innerHTML = `${prenom} ${nom}` :nomProfil
let fleche = document.querySelector('.fleche');
let dropDown = document.querySelector('#dropDown');
fleche.addEventListener('click', ()=>{
    dropDown.classList.toggle('active')
})
    



