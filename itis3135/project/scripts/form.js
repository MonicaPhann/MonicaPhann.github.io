// Contact form validation
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (e) {
            let valid = true;
            const name = document.getElementById("name");
            const email = document.getElementById("email");
            const message = document.getElementById("message");

            if (name.value.trim().length < 2) {
                alert("Name must be at least 2 characters.");
                valid = false;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email.value.trim())) {
                alert("Please enter a valid email.");
                valid = false;
            }

            if (message.value.trim().length < 10) {
                alert("Message must be at least 10 characters.");
                valid = false;
            }

            if (!valid) {
                e.preventDefault();
            }
        });
    }
});
