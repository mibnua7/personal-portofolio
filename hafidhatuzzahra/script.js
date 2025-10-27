/* Postcard interactions: flip, typing, hearts & confetti */
(function () {
  const postcard = document.getElementById("postcard");
  const openBtn = document.getElementById("openBtn");
  const closeBtn = document.getElementById("closeBtn");
  const confettiBtn = document.getElementById("confettiBtn");
  const effects = document.getElementById("effects");
  const typedEl = document.getElementById("typed");

  const message = `Setiap hari bersamamu adalah rumah; hangat, lucu, dan tak tergantikan. Aku mencintaimu lebih dari kata-kata, lebih dari waktu. Terima kasih sudah menjadi kamu—sederhana, kuat, penuh cinta.`;

  function toggleFlip(on) {
    if (on === undefined) postcard.classList.toggle("is-flipped");
    else postcard.classList.toggle("is-flipped", !!on);
  }

  function typeText(target, text, delay = 30) {
    target.textContent = "";
    let i = 0;
    const id = setInterval(() => {
      target.textContent += text.charAt(i);
      i++;
      if (i >= text.length) clearInterval(id);
    }, delay);
  }

  function spawnHeart(x, y) {
    const h = document.createElement("div");
    h.className = "heart ani";
    h.style.left = x + "px";
    h.style.top = y + "px";
    h.style.transform = `translate(-50%,-50%) scale(${
      0.8 + Math.random() * 0.6
    })`;
    effects.appendChild(h);
    setTimeout(() => h.remove(), 1800);
  }

  function burstHearts(centerX, centerY, count = 8) {
    for (let i = 0; i < count; i++) {
      const rx = centerX + (Math.random() - 0.5) * 160;
      const ry = centerY + (Math.random() - 0.6) * 120;
      setTimeout(() => spawnHeart(rx, ry), i * 60);
    }
  }

  function spawnConfetti() {
    const colors = ["#FF6F9A", "#FFD3E6", "#FFB1C9", "#FF82B3", "#FFD6E0"];
    const count = 30;
    for (let i = 0; i < count; i++) {
      const el = document.createElement("div");
      el.className = "confetti ani";
      const size = 6 + Math.random() * 12;
      el.style.width = size + "px";
      el.style.height = Math.max(6, size * 1.4) + "px";
      el.style.left = Math.random() * 100 + "vw";
      el.style.top = -10 - Math.random() * 10 + "vh";
      el.style.background = colors[Math.floor(Math.random() * colors.length)];
      el.style.transform = `rotate(${Math.random() * 360}deg)`;
      effects.appendChild(el);
      // cleanup
      setTimeout(() => el.remove(), 2200 + Math.random() * 600);
    }
  }

  // events
  openBtn &&
    openBtn.addEventListener("click", () => {
      toggleFlip(true);
      // type message on open
      setTimeout(() => typeText(typedEl, message, 22), 420);
      // small heart burst
      const rect = openBtn.getBoundingClientRect();
      burstHearts(rect.left + rect.width / 2, rect.top + rect.height / 2, 6);
    });

  closeBtn &&
    closeBtn.addEventListener("click", () => {
      toggleFlip(false);
    });

  // confetti button
  confettiBtn &&
    confettiBtn.addEventListener("click", () => {
      spawnConfetti();
      // also a gentle heart burst near button
      const r = confettiBtn.getBoundingClientRect();
      burstHearts(r.left + r.width / 2, r.top + r.height / 2, 10);
    });

  // click anywhere on front to spawn a heart
  postcard &&
    postcard.addEventListener("click", (e) => {
      const isFront = !postcard.classList.contains("is-flipped");
      if (isFront) {
        const x = e.clientX;
        const y = e.clientY;
        spawnHeart(x, y);
      }
    });

  // keyboard accessibility: Enter to open/close while focused
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") toggleFlip(false);
    if (e.key === "Enter") {
      // if focus is within postcard, toggle
      if (
        document.activeElement &&
        document.activeElement.closest &&
        document.activeElement.closest(".postcard")
      ) {
        toggleFlip();
      }
    }
  });

  // initial small animation: pulse a heart over the stamp
  window.addEventListener("load", () => {
    const stamp = document.querySelector(".stamp");
    if (stamp) {
      const r = stamp.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      setTimeout(() => burstHearts(cx, cy, 4), 600);
    }
  });
})();
