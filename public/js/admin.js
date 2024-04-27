
      // function registerAdmin() {
      //   var name = document.getElementById("name").value;
      //   var age = document.getElementById("age").value;
      //   var location = document.getElementById("location").value;
      //   var nin = document.getElementById("nin").value;
      //   var email = document.getElementById("email").value;
      //   var phone = document.getElementById("phone").value;

      //   // Perform any additional validation here

      //   // Create an object to hold the admin data
      //   var adminData = {
      //     name: name,
      //     age: age,
      //     location: location,
      //     nin: nin,
      //     email: email,
      //     phone: phone,
      //   };

      //   // Send the admin data to the server or perform any other action
      //   console.log(adminData);
      // }

      // function registerAdmin() {
      //   // Get form data
      //   var formData = new FormData(document.getElementById("adminRegistrationForm"));
        
      //   // Send form data to server (you can use AJAX for this)
      //   // For demonstration purposes, let's just log the form data
      //   for (var pair of formData.entries()) {
      //     console.log(pair[0] + ': ' + pair[1]);
      //   }
      
      //   // Clear the form fields
      //   document.getElementById("adminRegistrationForm").reset();
      
      //   // Display a new form or perform any other action here
      //   alert("Admin registered successfully! Now you can display a new form or perform any other action.");
      // }
      
      function registerAdmin() {
        // Get form data
        var formData = new FormData(document.getElementById("adminRegistrationForm"));
        
        // Send form data to server using AJAX
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "save_data.php", true);
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4 && xhr.status === 200) {
            // If request is successful, alert the response from the server
            alert(xhr.responseText);
            
            // Clear the form fields
            document.getElementById("adminRegistrationForm").reset();
          }
        };
        xhr.send(formData);
      }
      