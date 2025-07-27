
document.addEventListener("DOMContentLoaded", function () {
  const speakBtn = document.getElementById("speak-btn");
  const textToSpeech = document.getElementById("text-to-speech");

  speakBtn.addEventListener("click", function () {
    const text = textToSpeech.value.trim();

    if (text === "") {
      alert("Please enter some text to speak");
      return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    // Create a speech synthesis utterance
    const utterance = new SpeechSynthesisUtterance(text);

    // Speak the text
    window.speechSynthesis.speak(utterance);

    // Add animation to button while speaking
    speakBtn.classList.add("speaking");

    utterance.onend = function () {
      speakBtn.classList.remove("speaking");
    };
  });
});