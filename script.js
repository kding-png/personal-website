const statusMessage = document.querySelector('.navigation-message');

document.querySelectorAll('[data-coming-soon]').forEach((button) => {
  button.addEventListener('click', () => {
    if (statusMessage) statusMessage.textContent = `${button.dataset.comingSoon} — coming soon.`;
  });
});
