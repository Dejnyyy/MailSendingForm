document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let valid = true;

    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const description = document.getElementById('description').value;
    const name = document.getElementById('name').value;

    if (!email) {
        showError('emailError', 'Email je povinný.');
        valid = false;
    } else {
        clearError('emailError');
    }

    if (!subject) {
        showError('subjectError', 'Předmět je povinný.');
        valid = false;
    } else {
        clearError('subjectError');
    }

    if (!description) {
        showError('descriptionError', 'Popis je povinný.');
        valid = false;
    } else {
        clearError('descriptionError');
    }

    if (!name) {
        showError('nameError', 'Jméno a Příjmení jsou povinné.');
        valid = false;
    } else {
        clearError('nameError');
    }

});

function showError(id, message) {
    let errorElement = document.getElementById(id);
    if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.id = id;
        errorElement.className = 'error';
        document.getElementById(id.replace('Error', '')).after(errorElement);
    }
    errorElement.textContent = message;
}

function clearError(id) {
    const errorElement = document.getElementById(id);
    if (errorElement) {
        errorElement.remove();
    }
}
