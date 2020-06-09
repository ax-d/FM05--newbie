const form = document.querySelector('.content__form');
const formItem = document.querySelector('.content-form__input');
const formError = document.querySelector('.form-error');

form.setAttribute('novalidate', "");

formItem.addEventListener('blur', function (event) {
    if (formItem.validity.valid)
        formError.textContent = '';
    else
        showError();
}, true);

form.addEventListener('submit', function (event) {
    if (!formItem.validity.valid) {
        showError();

        event.preventDefault();
    }
});

function showError() {
    formItem.style.borderColor = 'hsl(354, 100%, 66%)';

    if (formItem.validity.valueMissing)
        formError.textContent = "Whoops! It looks like you forgot to add your email";
    else if (formItem.validity.patternMismatch)
        formError.textContent = "Please provide a valid email address";
}