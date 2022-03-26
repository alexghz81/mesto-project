const showErrorMessage = (errorElement, inputElement, inputErrorClass) => {
  errorElement.textContent = inputElement.validationMessage;
  inputElement.classList.add(inputErrorClass);
}

const hideErrorMessage = (errorElement, inputElement, inputErrorClass) => {
  errorElement.textContent = inputElement.validationMessage;
  inputElement.classList.remove(inputErrorClass);
}

const checkInputValidation = (formElement, inputElement, inputErrorClass) => {
  const isInputValid = inputElement.validity.valid;
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  if (isInputValid) {
    hideErrorMessage(errorElement, inputElement, inputErrorClass);
  } else {
    showErrorMessage(errorElement, inputElement, inputErrorClass);
  }
};

const toggleSubmitButton = (submitButton, active, inactiveButtonClass) => {
  if (active) {
    submitButton.classList.remove(inactiveButtonClass);
    submitButton.disabled = false;
  } else {
    submitButton.classList.add(inactiveButtonClass);
    submitButton.disabled = 'disabled';
  }
}

const setupEventListeners = (formElement, {inputSelector, submitButtonSelector, inputErrorClass, inactiveButtonClass}) => {
  const inputsList = formElement.querySelectorAll(inputSelector);
  const submitButton = formElement.querySelector(submitButtonSelector);

  [...inputsList].forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      const formIsValid = formElement.checkValidity();
      checkInputValidation(formElement, inputElement, inputErrorClass);
      toggleSubmitButton(submitButton, formIsValid, inactiveButtonClass);
    })
  })
}

export const enableValidation = ({formSelector, ...params}) => {
  const forms = document.querySelectorAll(formSelector);
  [...forms].forEach(formElement => {
    setupEventListeners(formElement, params);
  })
}

