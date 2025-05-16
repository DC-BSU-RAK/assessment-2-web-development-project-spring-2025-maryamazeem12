// ====== VIDEO SWITCHING LOGIC ======
//SELECT THE NEXT BUTTON AND THE VIDEO ELEMENT
const nextButton = document.querySelector('.next-btn');
const video = document.querySelector('.hero-video');

//LISTS OF HERO VIDEO FILE PATHS TO SWITCH BETWEEN
const movieList = [
  'video/hero-1.mp4',
  'video/hero-2.mp4',
  'video/hero-3.mp4',
  'video/hero-4.mp4'
];
//KEEP TRACT OF WHICH VIDEO IS CURRENTLY PLAYING
let index = 0;

//IF BOTH BUTTON AND VIDEO EXIST, ADD A CLICK EVENT TO SWITCH THE VIDEO
if (nextButton && video) {
  nextButton.addEventListener('click', () => {
    //GO TO THE NEXT VIDEO IN THE LISTS
    index = (index + 1) % movieList.length;
    //UPDATE VIDEOS SOURCE
    video.src = movieList[index];
    //RELOAD THE VIDEO ELEMENT
    video.load();
    //AUTOMATICALLY PLAY THE NEW VIDEO
    video.play();
  });
}

// ====== HEADER ANIMATION ======
//SELECT THE HEADER AND HERO VIDEO
const header = document.getElementById('mainHeader');
const heroVideoElement = document.querySelector('.hero-video');
//CHECK IF THE HEADER IS EXPANDED
let isExpanded = false;

//WHEN THE HEADER IS CLICKED,MAKE IT LARGER AND CHANGE THE TITLE SIZE
if (header && heroVideoElement) {
  header.addEventListener('click', () => {
    //INCREASE HEADER PADDING
    header.style.padding = '3rem 1rem';
    //FIND TITLE INSIDE HEADER
    const title = header.querySelector('.main-title');
    //MAKE THE TITLE BIGGER
    if (title) title.style.fontSize = '3.8rem';
    //MARK HEADER AS EXPANDED
    isExpanded = true;
  });

  //WHEN MOUSE ENTERS THE HERO VIDEO AREA, RESET HEADER TO ORIGINAL SIZE
  heroVideoElement.addEventListener('mouseenter', () => {
    if (isExpanded) {
      //RESTORE ORIGINAL PADDING
      header.style.padding = '1.5rem 1rem';
      const title = header.querySelector('.main-title');
      //RESTORE ORIGINAL FONT SIZE
      if (title) title.style.fontSize = '2.8rem';
      //RESET EXPANDED STATE
      isExpanded = false;
    }
  });
}
//SCROLL ANIMATION
//CREATE AN OBSERVER TO DETECT WHEN THE ELEMENTS SCROLL INTO VIEW
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      //ADD CLASS WHEN VISIBLE ON SCREEN
      entry.target.classList.add('show');
    }
  });
});

//SELECT THE ELEMENTS WITH THE 'IMPACT SCROLL' CLASS AND OBSERVE IT
const scrollElement = document.querySelector('.impact-scroll');
if (scrollElement) {
  //START OBSERVING FOR SCROLL INTO VIEW
  observer.observe(scrollElement);
}

//===== OPEN YOUTUBE TRAILER BUTTON ======
//WAIT UNTIL YOUR DOM IS READY, THEN ATTACH CLICK LISTENER TO TRAILER BUTTON
document.addEventListener("DOMContentLoaded", function () {
  const trailerBtn = document.querySelector(".warzone-section button");

  if (trailerBtn) {
    trailerBtn.addEventListener("click", function () {
      // Open Warzone trailer in a new browser tab
      window.open("https://youtu.be/h0uxvKUjsj4?si=3sMy4jYLrcgp_h9I", "_blank");
    });
  }
});

// ====== SMOOTH SCROLL TO "ABOUT" SECTION ======
document.addEventListener("DOMContentLoaded", function () {
  const nextBtn = document.querySelector(".next-btn");
  const aboutSection = document.querySelector("#about");

  if (nextBtn && aboutSection) {
    nextBtn.addEventListener("click", function () {
      //SMOOTHLY SCROLL TO THE ABOUT SECTION WHEN THE "NEXT" IS CLICKED
      aboutSection.scrollIntoView({ behavior: "smooth" });
    });
  }
});

// ====== BUY BUTTON LOGIC ======
//ATTACH ALERT POP-UP TO EACH BUTTON
document.querySelectorAll('.buy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    alert("Weapon added to your loadout! (Feature coming soon)");
  });
});

//CUSTOM PROTOCOAL OPEN
//ATTEMPT TO OPEN A CALL OF DUTY APP VIA CUSTOM PROTOCOAL
window.open('codapp://buy/m4');

//CARD DEACTIVATION LOGIC
//WHEN USER CLICKS ANYWHERE ON THE PAGE
document.addEventListener('click', function(e) {
  //REMOVE 'ACTIVE' CLASS FROM ALL GAME CARDS THAT WERE NOT CLICKED
  document.querySelectorAll('.cod-game-card').forEach(card => {
    if (!card.contains(e.target)) {
      card.classList.remove('active');
    }
  });
});

//GET THE AUDIO ELEMENT FROM THE HTML WITH ID "CLICKSOUND"
const clickSound = document.getElementById('clickSound');

// DEFINE A FUNCTION TO PLAY THE CLICK SOUND
function playClickSound() {
  clickSound.currentTime = 0; // REWIND THE AUDIO TO THE BEGINNING EVERY TIME BEFORE PLAYING
  clickSound.play().catch(err => {
    //CATCH AND LOG ANY ERRORS
    console.log('Click sound blocked or not loaded yet.', err);
  });
}

//ADD A CLICK EVENT LISTENER TO THE ENTIRE ELEMENT
document.addEventListener('click', (e) => {
  //GET THE TAG NAME OF THE CLICKED ELEMENT(CONVERTED TO LOWERCASE)
  const tag = e.target.tagName.toLowerCase();
  //ONLY PLAY THE SOUND IF THE CLICKED ELEMENT IS A BUTTON, LINK(A), OR INPUT FIELD
  if (['button', 'a', 'input'].includes(tag)) {
    playClickSound();
  }
});
//OPTIONAL:THIS SECOND EVENT LISTENER PLAYS THE SOUND FOR ALL CLICKS,NOT JUST SPECIFIC ELEMENTS
//YOU CAN REMOVE THIS IF THE FIRST LISTENER IS ENOUGH
document.addEventListener('click', () => {
  playClickSound();
});
//GET ALL <A> LINK ELEMENTS-YOU CAN USE THIS TO DO MORE THINGS WITH THEM IF NEEDED
const buttons = document.querySelectorAll('a');


