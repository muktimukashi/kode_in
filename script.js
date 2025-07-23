function checkAnswer(button, isCorrect) {
  const result = document.getElementById("result");
  if (isCorrect) {
    result.textContent = "✅ Jawaban Benar!";
    result.style.color = "green";
  } else {
    result.textContent = "❌ Jawaban Salah!";
    result.style.color = "red";
  }

  // Disable semua tombol setelah dijawab
  const buttons = document.querySelectorAll("button");
  buttons.forEach(btn => btn.disabled = true);
}
