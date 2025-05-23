document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const icon = question.querySelector("span");

    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Close all
      faqItems.forEach(faq => {
        faq.classList.remove("active");
        faq.querySelector(".faq-answer").style.maxHeight = null;
        faq.querySelector("span").textContent = "▼";
      });

      // Toggle current
      if (!isActive) {
        item.classList.add("active");
        answer.style.maxHeight = answer.scrollHeight + "px";
        icon.textContent = "▲";
      }
    });
  });
});
