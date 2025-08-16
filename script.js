
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});


const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

 
    window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });


navLinks.forEach(link => {
    link.classList.remove('active');
    if(link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
    }
})
    })



    // ===== Reel Modal Functionality =====
const modal = document.getElementById('reelModal');
const modalVideo = document.getElementById('modalVideo');
const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let reels = Array.from(document.querySelectorAll('.reel-card video source'))
                 .map(source => source.src);
let currentIndex = 0;

// Open reel in modal
document.querySelectorAll('.reel-card video').forEach((video, index) => {
    video.addEventListener('click', () => {
        modal.style.display = 'flex';
        currentIndex = index;
        playReel(currentIndex);
    });
});

function playReel(index) {
    modalVideo.src = reels[index];
    modalVideo.play();
}

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    modalVideo.pause();
    modalVideo.src = "";
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % reels.length;
    playReel(currentIndex);
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + reels.length) % reels.length;
    playReel(currentIndex);
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        modalVideo.pause();
        modalVideo.src = "";
    }
});

// // ===== Hover Preview for Reels =====
// document.querySelectorAll('.reel-card video').forEach(video => {
//     video.muted = true; // always muted for preview
//     video.loop = true;  // loop on hover
    
//     video.addEventListener('mouseenter', () => {
//         video.play();
//     });
    
//     video.addEventListener('mouseleave', () => {
//         video.pause();
//         video.currentTime = 0; // reset to start
//     });
// });
