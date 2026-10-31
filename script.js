
/* ==========================================
   PERSONALIZE YOUR BIRTHDAY WEBSITE HERE
========================================== */

const SETTINGS = {
  hisName: "My Man",
  yourNicknameForHim: "dhorjevo, my love, my man",

  // Change this to his actual birthday.
  // Format: YYYY-MM-DDTHH:MM:SS
  // Example: November 1, 2026 at midnight.
  birthdayDate: "2026-11-01T00:00:00"
};

/* ==========================================
   BASIC PERSONALIZATION
========================================== */

const heroName = document.getElementById("heroName");
const letterGreeting = document.getElementById("letterGreeting");

heroName.textContent = SETTINGS.hisName;
letterGreeting.textContent = `To ${SETTINGS.yourNicknameForHim},`;

/* ==========================================
   BIRTHDAY COUNTDOWN
========================================== */

const birthday = new Date(SETTINGS.birthdayDate);

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const countdownMessage = document.getElementById("countdownMessage");

function updateCountdown() {
  const now = new Date();
  const difference = birthday.getTime() - now.getTime();

  if (Number.isNaN(birthday.getTime())) {
    countdownMessage.textContent =
      "Please check the birthday date in script.js.";
    return;
  }

  if (difference <= 0) {
    daysElement.textContent = "00";
    hoursElement.textContent = "00";
    minutesElement.textContent = "00";
    secondsElement.textContent = "00";

    countdownMessage.textContent =
      "IT'S HIS BIRTHDAY! Today is all about celebrating you, my love. ❤️";

    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference / (1000 * 60 * 60)) % 24
  );
  const minutes = Math.floor(
    (difference / (1000 * 60)) % 60
  );
  const seconds = Math.floor(
    (difference / 1000) % 60
  );

  daysElement.textContent = String(days).padStart(2, "0");
  hoursElement.textContent = String(hours).padStart(2, "0");
  minutesElement.textContent = String(minutes).padStart(2, "0");
  secondsElement.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

/* ==========================================
   SECRET SURPRISE POP-UP
========================================== */

const surpriseModal = document.getElementById("surpriseModal");
const openSurprise = document.getElementById("openSurprise");
const closeModal = document.getElementById("closeModal");
const modalContinue = document.getElementById("modalContinue");

function openTheModal() {
  surpriseModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  closeModal.focus();
}

function closeTheModal() {
  surpriseModal.classList.add("hidden");
  document.body.style.overflow = "";
}

openSurprise.addEventListener("click", openTheModal);
closeModal.addEventListener("click", closeTheModal);

modalContinue.addEventListener("click", () => {
  closeTheModal();
  document.getElementById("letter").scrollIntoView({
    behavior: "smooth"
  });
});

surpriseModal.addEventListener("click", (event) => {
  if (event.target === surpriseModal) {
    closeTheModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !surpriseModal.classList.contains("hidden")) {
    closeTheModal();
  }
});

/* ==========================================
   FLOATING HEARTS
========================================== */

const floatingHearts = document.getElementById("floatingHearts");
const heartSymbols = ["♥", "♡", "❤", "✧"];

function createFloatingHeart() {
  const heart = document.createElement("span");
  heart.className = "floating-heart";

  heart.textContent =
    heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${12 + Math.random() * 18}px`;
  heart.style.setProperty(
    "--duration",
    `${6 + Math.random() * 5}s`
  );

  floatingHearts.appendChild(heart);

  heart.addEventListener("animationend", () => {
    heart.remove();
  });
}

// Keep the background gentle rather than filling the screen.
setInterval(createFloatingHeart, 850);

/* ==========================================
   EDITABLE LOVE LETTER
========================================== */

const editLetter = document.getElementById("editLetter");
const letterEditor = document.getElementById("letterEditor");
const customLetter = document.getElementById("customLetter");
const saveLetter = document.getElementById("saveLetter");
const cancelEdit = document.getElementById("cancelEdit");
const letterCopy = document.getElementById("letterCopy");

let savedLetterText = Array.from(letterCopy.querySelectorAll("p"))
  .map((paragraph) => paragraph.textContent.trim())
  .join("\n\n");

editLetter.addEventListener("click", () => {
  customLetter.value = savedLetterText;
  letterEditor.classList.remove("hidden");
  customLetter.focus();
  letterEditor.scrollIntoView({
    behavior: "smooth",
    block: "nearest"
  });
});

saveLetter.addEventListener("click", () => {
  const newLetter = customLetter.value.trim();

  if (!newLetter) {
    alert("Write a little something from your heart first. ❤️");
    customLetter.focus();
    return;
  }

  savedLetterText = newLetter;

  // Use textContent so the letter is treated as text, not HTML.
  letterCopy.replaceChildren();

  newLetter.split(/\n\s*\n/).forEach((paragraphText) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = paragraphText.trim();
    letterCopy.appendChild(paragraph);
  });

  letterEditor.classList.add("hidden");
});

cancelEdit.addEventListener("click", () => {
  letterEditor.classList.add("hidden");
});

/* ==========================================
   TAP-TO-REVEAL LOVE NOTES
========================================== */

const reasonCards = document.querySelectorAll(".reason-card");
const reasonReveal = document.getElementById("reasonReveal");

reasonCards.forEach((card) => {
  card.addEventListener("click", () => {
    reasonReveal.textContent = card.dataset.message;
    reasonReveal.classList.remove("hidden");

    reasonReveal.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  });
});

/* ==========================================
   BIRTHDAY WISH SURPRISE
========================================== */

const wishBtn = document.getElementById("wishBtn");
const wishMessage = document.getElementById("wishMessage");

let wishMade = false;

wishBtn.addEventListener("click", () => {
  wishMessage.classList.remove("hidden");
  wishMessage.scrollIntoView({
    behavior: "smooth",
    block: "nearest"
  });

  if (!wishMade) {
    wishMade = true;
    celebrateWithHearts();
    wishBtn.textContent = "Your wish is sent with love ♥";
  }
});

function celebrateWithHearts() {
  for (let i = 0; i < 35; i++) {
    setTimeout(() => {
      createFloatingHeart();
    }, i * 90);
  }
}

console.log("A little birthday universe, made with love. ❤️");
console.log("Personalized for:", SETTINGS.hisName);
