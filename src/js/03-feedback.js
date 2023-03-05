import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const emailRef = formRef.querySelector('[type="email"]');
const messageRef = formRef.querySelector('[name="message"]');

const FEEDBACK_DATA = 'feedback-form-state';

formRef.addEventListener('input', throttle(onInput, 1000));
formRef.addEventListener('submit', onSubmit);

initForm();

function onInput() {
  const inputData = [emailRef.value, messageRef.value];
  localStorage.setItem(FEEDBACK_DATA, JSON.stringify(inputData));
}

function onSubmit(e) {
  e.preventDefault();
  console.log('email:', emailRef.value);
  console.log('message:', messageRef.value);
  localStorage.removeItem(FEEDBACK_DATA);
  formRef.reset();
}

function initForm() {
  const localeStorageData = localStorage.getItem(FEEDBACK_DATA);
  if (localeStorageData) {
    const [email, message] = JSON.parse(localeStorageData);
    emailRef.value = email;
    messageRef.value = message;
  }
}
