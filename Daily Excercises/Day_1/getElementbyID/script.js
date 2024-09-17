function login() {
    const form = document.getElementById('loginForm');

    if (form.checkValidity()) {
        const formData = new FormData(form);
        const data = {};

        formData.forEach((value, key) => {
            if (data[key]) {
                if (!Array.isArray(data[key])) {
                    data[key] = [data[key]];
                }
                data[key].push(value);
            } else {
                data[key] = value;
            }
        });

        console.log('Form Data:', data);
        alert('Login successful! (Check console for details)');
    } else {
        alert('Please fill out all required fields.');
    }
}

function resetForm() {
    const form = document.getElementById('loginForm');
    form.reset();
}
