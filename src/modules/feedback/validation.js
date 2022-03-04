const createMessage = (text, classes) => {
  const errorElement = document.createElement('p');
  errorElement.innerText = text;
  classes.forEach((className) => {
    errorElement.classList.add(className);
  });
  return errorElement;
};

const removeError = (field) => {
  field.querySelector('.feedback__error-message').remove();
  field.classList.remove('feedback__field-error');
};

const addError = (field, error) => {
  const elem = field.querySelector('.field');
  field.classList.add('feedback__field-error');
  const errorText = field.querySelector('.feedback__error-message');
  if (!errorText) {
    if (elem.tagName === 'TEXTAREA') {
      field.insertAdjacentElement('beforeend', createMessage(error, ['feedback__error-message', 'feedback__error-textarea']));
    } else {
      field.insertAdjacentElement('beforeend', createMessage(error, ['feedback__error-message']));
    }
  } else {
    errorText.innerText = error;
  }
};

const required = (value) => (value === '' ? 'Это поле обязательно для заполнения' : null);
const email = (value) => {
  if (!value.match(/\w*@[A-Za-z]*\.[A-Za-z]{1,3}$/g)) {
    return 'Неверный формат email';
  }
  return null;
};

const validation = (fields) => {
  const errorsMessage = [];
  fields.forEach((field, idx) => {
    const elem = field.querySelector('.field');

    // required
    errorsMessage.push(required(elem.value));

    // email
    if (elem === document.getElementById('feedbackEmail')) {
      if (errorsMessage[idx] === null) {
        errorsMessage[idx] = email(elem.value);
      }
    }

    addError(field, errorsMessage[idx]);
    if (errorsMessage[idx] === null) {
      removeError(field);
    }
  });

  return errorsMessage.find((error) => error !== null) !== undefined;
};

export default validation;
