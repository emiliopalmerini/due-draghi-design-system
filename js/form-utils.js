// Due Draghi Design System - Form Utilities
// Utilities for dynamic forms with add/remove functionality

// Add a new character level input
function addCharacterLevel() {
  const container = document.getElementById('character-levels-container');
  if (!container) return;

  const index = container.children.length + 1;
  const html = `
    <div class="character-level-input">
      <label for="level-${index}">Personaggio ${index}</label>
      <input
        type="number"
        id="level-${index}"
        name="levels"
        min="1"
        max="20"
        value="1"
        required
      />
    </div>
  `;

  container.insertAdjacentHTML('beforeend', html);
}

// Remove the last character level input
function removeCharacterLevel() {
  const container = document.getElementById('character-levels-container');
  if (!container || container.children.length <= 1) return;

  container.removeChild(container.lastChild);
}

// Toggle visibility of conditional content based on radio selection
function toggleConditionalContent(radioName, targetSelector) {
  const radios = document.querySelectorAll(`input[name="${radioName}"]`);

  radios.forEach(radio => {
    radio.addEventListener('change', function() {
      const targets = document.querySelectorAll(targetSelector);
      targets.forEach(target => {
        target.classList.remove('active');
      });

      const activeTarget = document.querySelector(`${targetSelector}[data-value="${this.value}"]`);
      if (activeTarget) {
        activeTarget.classList.add('active');
      }
    });
  });
}

// Form validation helper
function validateForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return false;

  const inputs = form.querySelectorAll('input[required], select[required]');
  let isValid = true;

  inputs.forEach(input => {
    const formGroup = input.closest('.form-group');

    if (!input.value || !input.checkValidity()) {
      if (formGroup) {
        formGroup.classList.add('has-error');
      }
      isValid = false;
    } else {
      if (formGroup) {
        formGroup.classList.remove('has-error');
      }
    }
  });

  return isValid;
}

// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    addCharacterLevel,
    removeCharacterLevel,
    toggleConditionalContent,
    validateForm
  };
}
