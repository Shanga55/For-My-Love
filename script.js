const mainHeart = document.getElementById('mainHeart');
const message = document.getElementById('message');

mainHeart.addEventListener('click', () => {
  message.textContent = "I love you ❤️ hay beeeetam"; 

  mainHeart.style.background = 'none';
  mainHeart.style.transform = 'none';

  const backgroundImage = document.createElement('img'); 
  backgroundImage.src = 'img/us.jpg';  
  backgroundImage.alt = 'Love background';
  backgroundImage.classList.add('background-image');
  document.body.appendChild(backgroundImage); 

  const backgroundImage2 = document.createElement('img'); 
  backgroundImage2.src = 'img/us2.jpg';  
  backgroundImage2.alt = 'Love background';
  backgroundImage2.classList.add('background-image2');
  document.body.appendChild(backgroundImage2); 
  
  const backgroundImage3 = document.createElement('img'); 
  backgroundImage3.src = 'img/us3.jpg';  
  backgroundImage3.alt = 'Love background';
  backgroundImage3.classList.add('background-image3');
  document.body.appendChild(backgroundImage3);
  
  const backgroundImage4 = document.createElement('img'); 
  backgroundImage4.src = 'img/us4.jpg';  
  backgroundImage4.alt = 'Love background';
  backgroundImage4.classList.add('background-image4');
  document.body.appendChild(backgroundImage4);

  const backgroundImage5 = document.createElement('img'); 
  backgroundImage5.src = 'img/1.gif';  
  backgroundImage5.alt = 'Love background';
  backgroundImage5.classList.add('background-image5');
  document.body.appendChild(backgroundImage5);

  const backgroundImage6 = document.createElement('img'); 
  backgroundImage6.src = 'img/7.gif';  
  backgroundImage6.alt = 'Love background';
  backgroundImage6.classList.add('background-image6');
  document.body.appendChild(backgroundImage6);

  const backgroundImage7 = document.createElement('img'); 
  backgroundImage7.src = 'img/5.gif';  
  backgroundImage7.alt = 'Love background';
  backgroundImage7.classList.add('background-image7');
  document.body.appendChild(backgroundImage7);

  const backgroundImage8 = document.createElement('img'); 
  backgroundImage8.src = 'img/6.gif';  
  backgroundImage8.alt = 'Love background';
  backgroundImage8.classList.add('background-image8');
  document.body.appendChild(backgroundImage8);

  const backgroundImage9 = document.createElement('img'); 
  backgroundImage9.src = 'img/2.gif';  
  backgroundImage9.alt = 'Love background';
  backgroundImage9.classList.add('background-image9');
  document.body.appendChild(backgroundImage9);

  const backgroundImage10 = document.createElement('img'); 
  backgroundImage10.src = 'img/3.gif';  
  backgroundImage10.alt = 'Love background';
  backgroundImage10.classList.add('background-image10');
  document.body.appendChild(backgroundImage10);


  for (let i = 0; i < 10; i++) {
    createFloatingHeart("خۆشمەوێی چاو جوانەکەم");
  } 
});

function createFloatingHeart(text) {
  const floatingHeart = document.createElement('div');
  floatingHeart.classList.add('floating-heart');
  const heartContent = document.createElement('span');
  heartContent.textContent = text;
  floatingHeart.appendChild(heartContent);
  document.body.appendChild(floatingHeart);

  const randomX = Math.random() * window.innerWidth;
  floatingHeart.style.left = `${randomX}px`;

  floatingHeart.addEventListener('animationend', () => {
    floatingHeart.remove();
  });
}
