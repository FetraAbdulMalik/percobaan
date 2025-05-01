const confessBtn = document.getElementById('confessBtn');
const choiceButtons = document.getElementById('choiceButtons');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const message = document.getElementById('message');
const container = document.querySelector('.container');

confessBtn.addEventListener('click', () => {
  confessBtn.style.display = 'none';
  choiceButtons.style.display = 'block';
  message.textContent = '';
});

// Tombol "Mau" berfungsi normal
yesBtn.addEventListener('click', () => {
  message.textContent = 'makasih udah jawab ya sampai jumpa lagi! 🥰';
  choiceButtons.style.display = 'none';
});

// Tombol "Tidak" berpindah-pindah saat mouse mendekat
noBtn.addEventListener('mouseenter', () => {
  moveButtonRandomly(noBtn, container);
});

// Jika tetap dipencet (klik), tampilkan pesan lucu dan sembunyikan tombol
noBtn.addEventListener('click', () => {
  message.textContent = 'Yah, nggak apa-apa kok. Aku tetap suka kamu! 😊';
  choiceButtons.style.display = 'none';
});

// Fungsi untuk memindahkan tombol ke posisi acak dalam container
function moveButtonRandomly(button, container) {
  const containerRect = container.getBoundingClientRect();
  const buttonRect = button.getBoundingClientRect();

  // Hitung batas maksimal posisi tombol agar tidak keluar container
  const maxX = containerRect.width - buttonRect.width;
  const maxY = containerRect.height - buttonRect.height;

  // Posisi acak dalam batas container
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  // Set posisi tombol relatif terhadap container
  button.style.position = 'absolute';
  button.style.left = randomX + 'px';
  button.style.top = randomY + 'px';
}
