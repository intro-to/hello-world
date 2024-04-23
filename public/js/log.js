
      function validateForm() {
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Simple validation
        if (username === "" || email === "" || password === "") {
          alert("Please fill in all fields");
          return false;
        }

        
        // Redirect to another page
        window.location.href = "homepage.html";

        return false; // Prevent form submission
      }
    