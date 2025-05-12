document.getElementById("contact-form").addEventListener('submit', function(event) {
    event.preventDefault()

    const name = document.getElementById("name").value.trim()
    const email = document.getElementById("email").value.trim()
    const message = document.getElementById("message").value.trim()
    const errorMessage = document.getElementById("error-message")
})