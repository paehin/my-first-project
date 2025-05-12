document.getElementById("contact-form").addEventListener('submit', function(event) {
    event.preventDefault()

    const name = document.getElementById("name").value.trim()
    const email = document.getElementById("email").value.trim()
    const message = document.getElementById("message").value.trim()


    if (!name) {
        alert('Please enter your name.')
        return;
    }

    if (!email) {
        alert('Please enter your email.')
        return;
    }

    if (!message) {
        alert('Please enter your message.')
        return;
    }

    // If al validations pass, show success message
    alert('Thank you for your message!');
    this.reset();
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(String(email).toLowerCase())
}