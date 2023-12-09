const passwordClass = document.querySelectorAll('.password-control');
passwordClass.forEach((element) => {
    element.addEventListener('input', () => {
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