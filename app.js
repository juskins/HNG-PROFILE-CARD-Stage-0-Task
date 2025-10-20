// JavaScript to populate dynamic data
document.addEventListener("DOMContentLoaded", function () {
  // Get the current date and time
  const now = new Date();

 

  // Initial call to update the UTC time
  updateUTCTime();

  // Update the UTC time every second (real-time)
  setInterval(updateUTCTime, 1000);
});

// Function to update the UTC time in milliseconds
function updateUTCTime() {
  const now = new Date();
  const currentUTCTimeInMillis = now.toUTCString().split(" ")[4];
  document.querySelector(
    '[data-testid="test-user-time"]'
  ).textContent = `${currentUTCTimeInMillis}`;
}




// JavaScript for contact form validation

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (!form) return; // only run on contact page

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");
    const successMsg = document.getElementById("success");

    let valid = true;

    // Reset messages
    document
      .querySelectorAll(".error-message")
      .forEach((el) => (el.textContent = ""));
    successMsg.textContent = "";

    // Validate name
    if (name.value.trim() === "") {
      showError("name", "Full name is required");
      valid = false;
    }

    // Validate email
    if (email.value.trim() === "") {
      showError("email", "Email is required");
      valid = false;
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value.trim())) {
      showError("email", "Please enter a valid email");
      valid = false;
    }

    // Validate subject
    if (subject.value.trim() === "") {
      showError("subject", "Subject is required");
      valid = false;
    }

    // Validate message
    if (message.value.trim() === "") {
      showError("message", "Message is required");
      valid = false;
    } else if (message.value.trim().length < 10) {
      showError("message", "Message must be at least 10 characters long");
      valid = false;
    }

    if (valid) {
      successMsg.textContent = "Your message has been successfully sent!";
      form.reset();
    }
  });

  function showError(fieldId, message) {
    const errorElement = document.getElementById(`error-${fieldId}`);
    if (errorElement) {
      errorElement.textContent = message;
    }
  }
});
