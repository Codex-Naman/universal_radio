// script.js

document.addEventListener("DOMContentLoaded", function() {
    const questions = document.querySelectorAll('.faq-question');

    questions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;

            // Toggle display of the answer
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });
});

// Function to filter FAQs
function filterFAQs() {
    const input = document.getElementById('search-faq');
    const filter = input.value.toLowerCase();
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question').textContent.toLowerCase();
        if (question.includes(filter)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}
