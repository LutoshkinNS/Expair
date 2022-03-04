import './_feedback.scss';
import formRequest from './formRequest';
import validation from './validation';
import maskPhone from '../../plugins/maskPhone';

const feedback = () => {
  const form = document.getElementById('contactUs');
  const loader = '<div class="loader-wrap overlay" id="loader"><div class="lds-ring"><div></div><div></div><div></div><div></div></div></div>';
  const popup = document.getElementById('popup');
  const checkbox = document.getElementById('agree');
  const submitBtn = document.getElementById('btnSubmit');
  const inputs = form.querySelectorAll('input');
  const fields = form.querySelectorAll('.feedback__field');

  maskPhone('#feedbackPhone', '+7(___)___-__-__');

  const clearForm = () => {
    const textarea = form.querySelector('textarea');

    inputs.forEach((input) => {
      input.value = '';
    });
    checkbox.checked = false;
    textarea.value = '';
  };

  const sendForm = (body) => {
    formRequest(body)
      .then((response) => {
        if (!response.ok) {
          throw new Error('status network not ok');
        }
        document.getElementById('loader').remove();
        popup.classList.add('show');
        clearForm();
      })
      .catch((error) => {
        console.error(error);
        document.getElementById('loader').remove();
        popup.querySelector('.popup__content-success').classList.add('hide');
        popup.querySelector('.popup__content-error').classList.remove('hide');
        popup.classList.add('show');
        clearForm();
      }).finally(() => {
        submitBtn.classList.add('disabled');
      });
  };

  const checkSubmit = () => {
    checkbox.onclick = (e) => {
      if (e.target.checked) {
        submitBtn.classList.remove('disabled');
      } else {
        submitBtn.classList.add('disabled');
      }
    };
  };
  checkSubmit();

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const body = {};

    formData.forEach((val, key) => {
      body[key] = val;
    });

    if (checkbox.checked) {
      const errors = validation(fields);

      fields.forEach((field) => {
        const elem = field.querySelector('.field');
        elem.oninput = () => {
          validation(fields);
        };
      });

      if (!errors) {
        form.insertAdjacentHTML('beforebegin', loader);
        sendForm(body);
      }
    }
  });
};
export default feedback;
