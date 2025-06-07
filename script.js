const ideas = [
  "Paint something using only 3 colors.",
  "Write a haiku about your breakfast.",
  "Take a photo of something ordinary and make it look epic.",
  "Write a 2-minute monologue for a fictional villain.",
  "Make a collage from magazine clippings.",
  "Invent a holiday and design a poster for it.",
  "Write a short story that starts with a whisper.",
  "Design an album cover for a band that doesn't exist."
];

const button = document.getElementById('idea-btn');
const ideaBox = document.getElementById('idea-box');

button.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * ideas.length);
  const idea = ideas[randomIndex];
  ideaBox.textContent = idea;

  // Reset fade-in animation
  ideaBox.classList.remove('show');
  void ideaBox.offsetWidth; // triggers reflow
  ideaBox.classList.add('show');
});
