document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("feedbackForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
       
        // You can handle form submission logic here, e.g., sending data to server
        console.log("Form submitted!");

        // Reset form fields
        form.reset();
    });
});
