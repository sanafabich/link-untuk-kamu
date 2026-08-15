const $ = (s) => document.querySelector(s);
const all = (s) => document.querySelectorAll(s);

const texts = {
  slide1: "Selamat Ulang Tahun, Cantikku. ❤️\nSemoga hari ini membawa banyak senyum dan hal-hal baik buat kamu.",
  slide2: "Kamu pilih kadonya yaa, nanti aku akan berikan 🎁",
  slide4: "Aku minta maaf aku bukan orang yang bisa ngerti kamu, ngga paham sama pikiran kamu.",
  slide5: "Jangan bosen sama aku yaa, kalau bosen kamu boleh bilang dan aku bakal kasih kamu waktu untuk menenangkan diri.\n\nAku mungkin masih banyak kurangnya, tapi aku ingin terus belajar jadi orang yang lebih baik buat kamu. Terima kasih sudah tetap ada. ❤️",
  slide6: "Aku sayang kamu. Semoga kita selalu punya alasan untuk saling memilih, saling menjaga, dan saling membuat bahagia. 💕",
  slide3: "Tulis pesan apa saja yang ingin kamu sampaikan ke aku 💌"
};

let typingTimer = null;
let musicStarted = false;

function show(selector) {
  all(".content,.content2").forEach(el => el.classList.remove("active"));
  $(selector).classList.add("active");
}

function typeText(selector, text, speed = 42, done) {
  if (typingTimer) clearInterval(typingTimer);
  const el = $(selector);
  el.textContent = "";
  let i = 0;
  typingTimer = setInterval(() => {
    el.textContent += text.charAt(i++);
    if (i >= text.length) {
      clearInterval(typingTimer);
      typingTimer = null;
      if (done) done();
    }
  }, speed);
}

function showButton(selector) {
  const b = $(selector);
  b.style.display = "inline-block";
}

function hideButton(selector) {
  const b = $(selector);
  b.style.display = "none";
}

function startMusic() {
  const audio = $("#bgMusic");
  audio.volume = 0.55;
  const p = audio.play();
  if (p) p.catch(() => {});
  musicStarted = true;
}

function ilang() {
  $("#openScreen").style.display = "none";
  startMusic();
  show(".contentslide1");
  hideButton(".lanjut1");
  typeText(".typetxt1", texts.slide1, 45, () => showButton(".lanjut1"));
}

function tampilContent2() {
  show(".contentslide2");
  hideButton(".lanjut1");
  typeText(".typetxt2", texts.slide2, 42);
}

function tampilContent4(pilihan = "") {
  show(".contentslide4");
  hideButton(".lanjut4");
  const tambahan = pilihan ? `\n\nKamu memilih ${pilihan}. Semoga kamu suka yaa. ❤️` : "";
  typeText(".typetxt4", texts.slide4 + tambahan, 42, () => showButton(".lanjut4"));
}

function tampilContent5() {
  show(".contentslide5");
  hideButton(".lanjut5");
  typeText(".typetxt5", texts.slide5, 38, () => showButton(".lanjut5"));
}

function tampilContent6() {
  show(".contentslide6");
  hideButton(".lanjut6");
  typeText(".typetxt6", texts.slide6, 42, () => showButton(".lanjut6"));
}

function tampilContent3() {
  show(".contentslide3");
  typeText(".typetxt3", texts.slide3, 38);
}

function sendwish() {
  const msg = $("#valuewish").value.trim();
  if (!msg) {
    alert("Tulis pesannya dulu yaa ❤️");
    return;
  }
  const text = `Pesan dari website ini:\n\n${msg}`;
  const url = "https://wa.me/?text=" + encodeURIComponent(text);
  window.open(url, "_blank");
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => $(".preload").classList.add("hide"), 650);

  all(".gift-wrap").forEach(btn => {
    btn.addEventListener("click", () => {
      const gift = btn.querySelector(".kado").getAttribute("kadoo") || "kado pilihanmu";
      tampilContent4(gift);
    });
  });
});
