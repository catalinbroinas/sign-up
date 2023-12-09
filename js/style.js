const infoAlert = document.querySelector('.alert');
const passwordClass = document.querySelectorAll('.password-control');

passwordClass.forEach((element) => {
    element.addEventListener('input', () => {
        infoAlert.style.cssText = 'display: none;';
        let str = element.value;
        if (str.length === 0) {
            if (element.classList.contains('valid')) {
                element.classList.remove('valid');
            }
            if (element.classList.contains('invalid')) {
                element.classList.remove('invalid');
            }
        }
        else if (str.length < 8 || str.length > 36) {
            if (element.classList.contains('valid')) {
                element.classList.remove('valid');
            }
            element.classList.add('invalid');
        }
        else {
            if (element.classList.contains('invalid')) {
                element.classList.remove('invalid');
            }
            element.classList.add('valid');
        }
    });
});

function passwordValidate() {
    const password = document.querySelector('#password');
    const passwordConfirm = document.querySelector('#confirm-password');

    if (password.value != passwordConfirm.value) {
        passwordClass.forEach((element) => {
            if (element.classList.contains('valid')) {
                element.classList.remove('valid');
                element.classList.add('invalid');
            }
        });
        infoAlert.style.cssText = 'display: block;';
        infoAlert.textContent = 'Please confirm your password!';
        return false;
    }
    else {
        return true;
    }
}

const submitButton = document.querySelector('#btn-submit');
submitButton.addEventListener('click', (event) => {
    if (!passwordValidate()) {
        event.preventDefault();
    }
    else {
        event.preventDefault();
        location.reload();
    }
});