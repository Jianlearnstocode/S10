// A/B Test
const abTestContainer = document.getElementById('ab-test-container');

// Generate random variant
const variant = Math.random() < 0.5 ? 'A' : 'B';

// Render variant content
if (variant === 'A') {
  abTestContainer.innerHTML = `
    <h3>Variant A</h3>
    <p>This is the content for Variant A.</p>
    <button class="cta-button" data-variant="A">Click me (A)</button>
  `;
} else {
  abTestContainer.Container.innerHTML = `
    <h3>Variant B</h3>
    <p>This is the content for Variant B.</p>
    <button class="cta-button" data-variant="B">Click me (B)</button>
  `;
}

// Track CTA clicks
const ctaButton = document.getElementById('cta-button');
ctaButton.addEventListener('click', () => {
  console.log('CTA clicked');
});

// Track variant CTA clicks
const variantCtaButtons = document.querySelectorAll('.cta-button');
variantCtaButtons.forEach(button => {
  button.addEventListener('click', () => {
    const variant = button.dataset.variant;
    console.log(`Variant ${variant} CTA clicked`);
  });
});