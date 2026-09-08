const email = window.ECOMMERCE_OS_EU_CONFIG?.contactEmail;
document.querySelectorAll(".contact-email").forEach((link) => {
  if (email) { link.href = `mailto:${email}`; link.textContent = email; }
});
