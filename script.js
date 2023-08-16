const infoCard = document.querySelector('.infos');
const infoModel = document.querySelector('.model');

// infoCard.classList.remove('--card-active');
// infoModel.classList.remove('--card-active');

infoCard.addEventListener('click', ()=> {
    infoCard.classList.toggle('--card-active');
})

infoModel.addEventListener('click', ()=> {
    infoModel.classList.toggle('--card-active');
})