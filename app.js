const abTestContainer = document.getElementById("ab-test-container");
function assignNavEventListeners() {
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const clickedLink = event.target.textContent;
      console.log(`Navigation link "${clickedLink}" clicked`);
    });
  });
}
assignNavEventListeners();
function renderVariant(variant) {
  if (variant === "A") {
    abTestContainer.innerHTML = `
      <h3>Variant A</h3>
      <p>This is the content for Variant A.</p>
      <button id='ab_button_a' class="cta-button" data-variant="A">Click me (A)</button>
    `;
  } else {
    abTestContainer.innerHTML = `
      <h3>Variant B</h3>
      <p>This is the content for Variant B.</p>
      <button id='ab_button_b' class="cta-button" data-variant="B">Click me (B)</button>
    `;
  }
  assignEventListeners();
}
function assignEventListeners() {
  const variantCtaButtons = document.querySelectorAll(".cta-button");
  variantCtaButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const variant = button.dataset.variant;
      console.log(`Variant ${variant} CTA clicked`);
      // Toggle between variants
      if (variant === "A") {
        renderVariant("B");
      } else {
        renderVariant("A");
      }
    });
  });
}
const initialVariant = Math.random() < 0.5 ? "A" : "B";
renderVariant(initialVariant);
const ctaButton = document.getElementById("cta-button");
ctaButton.addEventListener("click", () => {
  console.log("CTA clicked");
});
