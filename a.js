document.addEventListener("DOMContentLoaded", () => {
  const backgrounds = ["bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg", "bg5.jpg"];
  let bgIndex = 0;

  // Background berganti otomatis setiap 4 detik.
  setInterval(() => {
    bgIndex = (bgIndex + 1) % backgrounds.length;
    document.body.style.backgroundImage =
      `linear-gradient(rgba(255, 185, 215, .38), rgba(255, 226, 239, .48)), url("${backgrounds[bgIndex]}")`;
  }, 4000);

  const cards = {
    app: document.getElementById("app"),
    gift: document.getElementById("giftSection"),
    message: document.getElementById("messageSection"),
    form: document.getElementById("formSection")
  };

  function show(card) {
    Object.values(cards).forEach(el => el.classList.add("hidden"));
    card.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  document.getElementById("loveButton").addEventListener("click", () => {
    document.getElementById("title").textContent = "Selamat Ulang Tahun, Cantikku. ❤️";
    document.getElementById("message").textContent =
      "Semoga hari ini penuh senyum, bahagia, dan hal-hal baik buat kamu.";
  });

  document.getElementById("nextButton").addEventListener("click", () => {
    show(cards.gift);
  });

  document.querySelectorAll(".gift").forEach(button => {
    button.addEventListener("click", () => {
      document.getElementById("giftResult").textContent =
        "Kamu pilih: " + button.dataset.gift + " 😘";
    });
  });

  document.getElementById("giftNext").addEventListener("click", () => {
    document.getElementById("longMessage").textContent =
      "Aku minta maaf aku bukan orang yang bisa ngerti kamu, " +
      "ngga paham sama pikiran kamu.\n\n" +
      "Jangan bosen sama aku yaa, kalau bosen kamu boleh bilang " +
      "dan aku bakal kasih kamu waktu untuk menenangkan diri.\n\n" +
      "Aku cuma ingin tetap ada buat kamu dan bikin kamu tersenyum. ❤️";
    show(cards.message);
  });

  document.getElementById("messageNext").addEventListener("click", () => {
    show(cards.form);
  });

  document.getElementById("sendButton").addEventListener("click", () => {
    const text = document.getElementById("reply").value.trim();
    const result = document.getElementById("sendResult");

    if (!text) {
      result.textContent = "Tulis pesannya dulu yaa ❤️";
      return;
    }

    result.textContent = "Pesannya sudah ditulis. Makasih yaa ❤️";
  });
});
