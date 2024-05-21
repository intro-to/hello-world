
      
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
      