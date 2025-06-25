// Page navigation control
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const audio = document.getElementById('backgroundAudio');
const audio2 = document.getElementById('backgroundAudio2');

// --- Page 1: "No" button random move logic ---
const container = document.querySelector('.container');

function moveNoButtonRandomly() {
    const rect = container.getBoundingClientRect();
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;
    const padding = 30;
    const maxX = rect.width - btnWidth - padding;
    const maxY = rect.height - btnHeight - padding;

    const randX = Math.floor(Math.random() * maxX);
    const randY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randX + 'px';
    noBtn.style.top = randY + 'px';
}

noBtn.style.left = '150px';
noBtn.style.top = '10px';

noBtn.addEventListener('mouseenter', () => {
    moveNoButtonRandomly();
});

// Make the button unclickable and move when clicked
noBtn.addEventListener('click', () => {
    noBtn.disabled = true; // Disable the button
    moveNoButtonRandomly(); // Move the button randomly
});

yesBtn.addEventListener('click', () => {
    switchPage(2);
});

function switchPage(pageNum) {
    page1.classList.remove('active');
    page2.classList.remove('active');
    page3.classList.remove('active');

    if (pageNum === 1) page1.classList.add('active');
    else if (pageNum === 2) page2.classList.add('active');
    else if (pageNum === 3) page3.classList.add('active');
}

// --- Audio control ---
function toggleAudio() {
    if (audio.paused) {
        audio.play();
        audio2.pause(); // Pause the second audio when the first one plays
    } else {
        audio.pause();
    }
}

function toggleAudio2() {
    if (audio2.paused) {
        audio2.play();
        audio.pause(); // Pause the first audio when the second one plays
    } else {
        audio2.pause();
    }
}

// --- Heart trail animation ---
const hearts = [];
const maxHearts = 20;

document.addEventListener('mousemove', (e) => {
    createHeart(e.clientX, e.clientY);
});

function createHeart(x, y) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';

    const heartsArray = ['❤️', '💕', '💖', '💗'];
    heart.textContent = heartsArray[Math.floor(Math.random() * heartsArray.length)];

    document.body.appendChild(heart);
    hearts.push(heart);

    setTimeout(() => {
        heart.remove();
        hearts.shift();
    }, 1200);
}

// --- Page 4 Navigation ---
const audioBtn = document.getElementById('audioBtn4'); // Tombol audio di Page 4
const audio4 = document.getElementById('backgroundAudio4'); // Audio untuk Page 4

// Fungsi untuk mengatur audio di Page 4
function toggleAudio4() {
    if (audio4.paused) {
        audio4.play();
    } else {
        audio4.pause();
    }
}

// Fungsi untuk kembali ke Page 3
function goToPage3() {
    switchPage(3); // Panggil fungsi switchPage untuk kembali ke Page 3
}

// Tambahkan event listener untuk tombol audio
if (audioBtn) {
    audioBtn.addEventListener('click', toggleAudio4);
}

// Tambahkan event listener untuk tombol kembali jika ada
const backButton = document.getElementById('backBtn'); // Jika Anda ingin menambahkan tombol kembali
if (backButton) {
    backButton.addEventListener('click', goToPage3);
}

// --- Next Page Button Logic for Page 3 ---
const nextPageBtn = document.getElementById('nextPageBtn');
nextPageBtn.addEventListener('click', () => {
    window.location.href = 'page4.html'; // Arahkan ke Page 4
});
