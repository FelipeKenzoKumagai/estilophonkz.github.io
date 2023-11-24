const heart = document.getElementById('heart');
const likeCount = document.getElementById('like-count');
let liked = false;
let count = 0;

heart.addEventListener('click', () => {
    if (!liked) {
        liked = true;
        count++;
    } else {
        liked = false;
        count--;
    }
    heart.classList.toggle('active', liked);
    likeCount.innerText = count;
});





const heart2 = document.getElementById('heart2');
const likeCount2 = document.getElementById('like-count2');
let liked2 = false;
let count2 = 0;

heart2.addEventListener('click', () => {
    if (!liked2) {
        liked2 = true;
        count2++;
    } else {
        liked2 = false;
        count2--;
    }
    heart2.classList.toggle('active', liked2);
    likeCount2.innerText = count2;
});






const heart3 = document.getElementById('heart3');
const likeCount3 = document.getElementById('like-count3');
let liked3 = false;
let count3 = 0;

heart3.addEventListener('click', () => {
    if (!liked3) {
        liked3 = true;
        count3++;
    } else {
        liked3 = false;
        count3--;
    }
    heart3.classList.toggle('active', liked3);
    likeCount3.innerText = count3;
});










const heart4 = document.getElementById('heart4');
const likeCount4 = document.getElementById('like-count4');
let liked4 = false;
let count4 = 0;
heart4.addEventListener('click', () => {
    if (!liked4) {
        liked4 = true;
        count4++;
    } else {
        liked4 = false;
        count4--;
    }
    heart4.classList.toggle('active', liked4);
    likeCount4.innerText = count4;
});









const heart5 = document.getElementById('heart5');
const likeCount5 = document.getElementById('like-count5');
let liked5 = false;
let count5 = 0;

heart5.addEventListener('click', () => {
    if (!liked5) {
        liked5 = true;
        count5++;
    } else {
        liked5 = false;
        count5--;
    }
    heart5.classList.toggle('active', liked5);
    likeCount5.innerText = count5;
});








const heart6 = document.getElementById('heart6');
const likeCount6 = document.getElementById('like-count6');
let liked6 = false;
let count6 = 0;

heart6.addEventListener('click', () => {
    if (!liked6) {
        liked6 = true;
        count6++;
    } else {
        liked6 = false;
        count6--;
    }
    heart6.classList.toggle('active', liked6);
    likeCount6.innerText = count6;
});






































//          ATENÇÃO!!!!
//AQUI COMEÇA A PARTE DA REPRODUÇÃO DA MÚSICA


function toggleMusic(containerId, audioId) {
    const container = document.getElementById(containerId);
    const audio = document.getElementById(audioId);
    const image = container.querySelector('Metamorphosis3-image');

    if (audio.paused) {
        audio.play();
        image.classList.add('playing');
    } else {
        audio.pause();
        audio.currentTime = 0;
        image.classList.remove('playing');
    }
}










