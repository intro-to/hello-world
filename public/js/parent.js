
  document
  .getElementById("parentDetailsForm")
  .addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting
  // Get the values from the form
  var parentName = document.getElementById("parentName").value;
  var parentAge = document.getElementById("parentAge").value;
  var parentSex = document.getElementById("parentSex").value;
  var parentLocation = document.getElementById("parentLocation").value;
  var parentNIN = document.getElementById("parentNIN").value;
  var parentContact = document.getElementById("parentContact").value;
  var emergencyContact =
  document.getElementById("emergencyContact").value;
  // Here, you can do something with the form data, such as sending it to a server or processing it locally
  // For this example, we'll just log the data to the console
  console.log("Parent Name:", parentName);
  console.log("Parent Age:", parentAge);
  console.log("Parent Sex:", parentSex);
  console.log("Location:", parentLocation);
  console.log("NIN:", parentNIN);
  console.log("Contact Number:", parentContact);
  console.log("Emergency Contact:", emergencyContact);
  // Redirect to another page after form submission
  window.location.href = "review.pug";
  });