
      function registerAdmin() {
        var name = document.getElementById("name").value;
        var age = document.getElementById("age").value;
        var location = document.getElementById("location").value;
        var nin = document.getElementById("nin").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;

        // Perform any additional validation here

        // Create an object to hold the admin data
        var adminData = {
          name: name,
          age: age,
          location: location,
          nin: nin,
          email: email,
          phone: phone,
        };

        // Send the admin data to the server or perform any other action
        console.log(adminData);
      }
