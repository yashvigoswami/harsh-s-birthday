// Floating hearts and decorative stars
const particleBox = document.getElementById("particles");
const symbols = ["♡", "♥", "✧", "✦", "❀"];

for (let i = 0; i < 28; i++) {
  const particle = document.createElement("span");
  particle.className = "particle";
  particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  particle.style.left = Math.random() * 100 + "%";
  particle.style.animationDuration = (8 + Math.random() * 12) + "s";
  particle.style.animationDelay = (Math.random() * 12) + "s";
  particle.style.fontSize = (12 + Math.random() * 18) + "px";
  particleBox.appendChild(particle);
}

// Surprise popup
const surpriseModal = document.getElementById("surpriseModal");

document.getElementById("openSurprise").addEventListener("click", () => {
  surpriseModal.hidden = false;
});

function closeSurprise() {
  surpriseModal.hidden = true;
}

document.getElementById("closeModal").addEventListener("click", closeSurprise);

document.getElementById("modalContinue").addEventListener("click", () => {
  closeSurprise();
  document.getElementById("letter").scrollIntoView({ behavior: "smooth" });
});

surpriseModal.addEventListener("click", (event) => {
  if (event.target === surpriseModal) closeSurprise();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeSurprise();
});

// Letter editor
const letterEditor = document.getElementById("letterEditor");
const letterCopy = document.getElementById("letterCopy");
const customLetter = document.getElementById("customLetter");

document.getElementById("editLetter").addEventListener("click", () => {
  customLetter.value = letterCopy.innerText;
  letterEditor.hidden = false;
  letterEditor.scrollIntoView({ behavior: "smooth", block: "center" });
});

document.getElementById("saveLetter").addEventListener("click", () => {
  const value = customLetter.value.trim();

  if (!value) {
    alert("Please write something first ❤️");
    return;
  }

  letterCopy.replaceChildren();

  value.split("\n").forEach((line) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = line || "\u00A0";
    letterCopy.appendChild(paragraph);
  });

  letterEditor.hidden = true;
});

document.getElementById("cancelEdit").addEventListener("click", () => {
  letterEditor.hidden = true;
});

// Clickable reasons
document.querySelectorAll(".reason-card").forEach((card) => {
  card.addEventListener("click", () => {
    const reveal = document.getElementById("reasonReveal");
    reveal.textContent = card.dataset.reason;
    reveal.animate(
      [{ opacity: 0, transform: "translateY(10px)" }, { opacity: 1, transform: "translateY(0)" }],
      { duration: 450, easing: "ease-out" }
    );
  });
});

// Birthday wish and celebration
document.getElementById("wishBtn").addEventListener("click", () => {
  const message = document.getElementById("wishMessage");
  const button = document.getElementById("wishBtn");
  const flame = document.getElementById("flame");

  message.hidden = false;
  flame.style.display = "none";
  button.textContent = "Your wish is on its way! ♥";
  button.disabled = true;

  for (let i = 0; i < 22; i++) {
    const sparkle = document.createElement("span");
    sparkle.textContent = ["♥", "✧", "♡", "✦"][i % 4];
    sparkle.style.cssText = `
      position: fixed;
      left: ${Math.random() * 100}vw;
      top: 100vh;
      color: #f4b6c7;
      font-size: ${16 + Math.random() * 14}px;
      z-index: 200;
      pointer-events: none;
      transition: transform 3s ease, opacity 3s ease;
    `;
    document.body.appendChild(sparkle);

    requestAnimationFrame(() => {
      sparkle.style.transform = `translateY(-110vh) rotate(${Math.random() * 500}deg)`;
      sparkle.style.opacity = "0";
    });

    setTimeout(() => sparkle.remove(), 3200);
  }

  message.scrollIntoView({ behavior: "smooth", block: "center" });
});
