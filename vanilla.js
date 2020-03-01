const first = document.querySelector('.one');
const second = document.querySelector('.two');
const third = document.querySelector('.three');
const fourth = document.querySelector('.four');
const fifth = document.querySelector('.five');

third.addEventListener('click', () => {
    first.style.paddingTop =  "245px ";
    first.style.marginLeft =  "35%";
    first.style.transition = "2s ease-in";


    second.style.paddingTop =  "245px";
    second.style.marginRight=  "55%";
    second.style.transition = "2s ease-in";

    fourth.style.paddingBottom=  "165px";
    fourth.style.marginLeft=  "60%";
    fourth.style.transition = "2s ease-in";
    
    fifth.style.paddingBottom=  "165px";
    fifth.style.marginRight=  "30%";
    fifth.style.transition = "2s ease-in";
});