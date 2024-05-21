 

  
  function validateForm() {
  let valid = true;
  // Validate parent name
  const parentName = document.getElementById("parentName").value;
  if (!parentName.trim()) {
  document.getElementById("parentNameError").style.display = "block";
  valid = false;
  } else {
  document.getElementById("parentNameError").style.display = "none";
  }
  // Validate parent age
  const parentAge = document.getElementById("parentAge").value;
  if (!parentAge || parentAge <= 0) {
  document.getElementById("parentAgeError").style.display = "block";
  valid = false;
  } else {
  document.getElementById("parentAgeError").style.display = "none";
  }
  // Validate parent sex
  const parentSex = document.getElementById("parentSex").value;
  if (!parentSex) {
  document.getElementById("parentSexError").style.display = "block";
  valid = false;
  } else {
  document.getElementById("parentSexError").style.display = "none";
  }
  // Validate parent location
  const parentLocation = document.getElementById("parentLocation").value;
  if (!parentLocation.trim()) {
  document.getElementById("parentLocationError").style.display = "block";
  valid = false;
  } else {
  document.getElementById("parentLocationError").style.display = "none";
  }
  // Validate parent NIN
  const parentNIN = document.getElementById("parentNIN").value;
  if (!parentNIN.trim()) {
  document.getElementById("parentNINError").style.display = "block";
  valid = false;
  } else {
  document.getElementById("parentNINError").style.display = "none";
  }
// Validate parent contact
  const parentContact = document.getElementById("parentContact").value;
  if (!parentContact.trim() || !/^\d{10}$/.test(parentContact)) {
    document.getElementById("parentContactError").style.display = "inline";
    valid = false;
  } else {
    document.getElementById("parentContactError").style.display = "none";
  }

  // Validate emergency contact
  const emergencyContact = document.getElementById("emergencyContact").value;
  if (!emergencyContact.trim() || !/^\d{10}$/.test(emergencyContact)) {
    document.getElementById("emergencyContactError").style.display = "inline";
    valid = false;
  } else {
    document.getElementById("emergencyContactError").style.display = "none";
  }
  return valid;
  }
  document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("parentDetailsForm").addEventListener("submit", function(event) {
  if (!validateForm()) {
  event.preventDefault();
  }
  });
  });
