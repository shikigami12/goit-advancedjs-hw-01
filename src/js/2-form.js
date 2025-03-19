class Form {
  constructor() {
    this.email = '';
    this.message = '';
  }

  /**
   * Handles the form submission.
   * @param {Event} event - The event object.
   */
  onSubmit(event) {
    event.preventDefault();
    if (this.validate()) {
      console.log(this);
      localStorage.clear();
      this.init();
      return;
    }

    alert('Please fill in all fields.');
  }

  /**
   * Validates the form.
   * @returns {boolean} The result of the validation.
   */
  validate() {
    return this.email && this.message;
  }

  /**
   * Handles the email input.
   * @param {Event} event - The event object.
   */
  onEmailInput(event) {
    event.preventDefault();
    this.email = event.target.value.trim();
    if (this.email) {
      localStorage.setItem('feedback-form-state', JSON.stringify(this));
    }
  }

  /**
   * Handles the message input.
   * @param {Event} event - The event object.
   */
  onMessageInput(event) {
    event.preventDefault();
    this.message = event.target.value.trim();
    if (this.message) {
      localStorage.setItem('feedback-form-state', JSON.stringify(this));
    }
  }

  /**
   * Initializes the form.
   */
  init() {
    const formElement = document.querySelector('.feedback-form');
    formElement.addEventListener('submit', this.onSubmit.bind(this));
    formElement.elements.email.addEventListener('input', this.onEmailInput.bind(this));
    formElement.elements.message.addEventListener('input', this.onMessageInput.bind(this));
    const state = JSON.parse(localStorage.getItem('feedback-form-state'));
    const email = state?.email ?? '';
    const message = state?.message ?? '';
    formElement.elements.email.value = email;
    formElement.elements.message.value = message;
    this.email = email;
    this.message = message;
  }
}

const form = new Form();
form.init();
