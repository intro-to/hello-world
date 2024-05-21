
function validateForm() {
  let valid = true;
  // Validate baby name
  const name = document.getElementById("name").value;
  if (!name.trim()) {
    document.getElementById("nameError").style.display = "block";
    valid = false;
  } else {
    document.getElementById("nameError").style.display = "none";
  }
  // Validate baby age
  const age = document.getElementById("age").value;
  if (!age || age <= 0) {
    document.getElementById("ageError").style.display = "block";
    valid = false;
  } else {
    document.getElementById("ageError").style.display = "none";
  }
  // Validate baby location
  const location = document.getElementById("location").value;
  if (!location.trim()) {
    document.getElementById("locationError").style.display = "block";
    valid = false;
  } else {
    document.getElementById("locationError").style.display = "none";
  }
  // Validate baby dob
  const dob = document.getElementById("dob").value;
  if (!dob.trim()) {
    document.getElementById("dobError").style.display = "block";
    valid = false;
  } else {
    document.getElementById("dobError").style.display = "none";
  }
  // Validate baby gender
  const gender = document.getElementById("gender").value;
  if (!gender) {
    document.getElementById("genderError").style.display = "block";
    valid = false;
  } else {
    document.getElementById("genderError").style.display = "none";
  }
  // Validate person who brought the baby
  const nextOfKin = document.getElementById("nextOfKin").value;
  if (!nextOfKin.trim()) {
    document.getElementById("nextOfKinError").style.display = "block";
    valid = false;
  } else {
    document.getElementById("nextOfKinError").style.display = "none";
  }
  // Validate time
  const timeofArrival = document.getElementById("timeofArrival").value;
  if (!timeofArrival.trim()) {
    document.getElementById("timeofArrivalError").style.display = "block";
    valid = false;
  } else {
    document.getElementById("timeofArrivalError").style.display = "none";
  }
 // Validate baby parent name
 const parentName = document.getElementById("parentName").value;
 if (!parentName.trim()) {
   document.getElementById("parentNameError").style.display = "block";
   valid = false;
 } else {
   document.getElementById("parentNameError").style.display = "none";
 }
  // Validate fees
  const fees = document.getElementById("fees").value;
  if (!fees.trim()) {
    document.getElementById("feesError").style.display = "block";
    valid = false;
  } else {
    document.getElementById("feesError").style.display = "none";
  }
  // Validate period of stay
  const periodofStay = document.getElementById("periodofStay").value;
  if (!periodofStay.trim()) {
    document.getElementById("periodofStayError").style.display = "block";
    valid = false;
  } else {
    document.getElementById("periodofStayError").style.display = "none";
  }
  //Vallidate date of Payment
  const paymentDate = document.getElementById("paymentDate").value;
  if (!paymentDate.trim()) {
    document.getElementById("paymentDateError").style.display = "block";
    valid = false;
  } else {
    document.getElementById("paymentDateError ").style.display = "none";
  }
  //Vallidate baby number
  const babiesNumber = document.getElementById("babiesNumber").value;
  if (!babiesNumber.trim()) {
    document.getElementById("babiesNumberError").style.display = "block";
    valid = false;
  } else {
    document.getElementById("babiesNumberError ").style.display = "none";
  }
  //Vallidate name of the person taking the baby
  const nameofpersontakingcare = document.getElementById("nameofpersontakingcare").value;
  if (!nameofpersontakingcare.trim()) {
    document.getElementById("nameofpersontakingcareError").style.display = "block";
    valid = false;
  } else {
    document.getElementById("nameofpersontakingcareError ").style.display = "none";
  }
   // Validate time
   const timeOut = document.getElementById("timeOut").value;
   if (!timeOut.trim()) {
     document.getElementById("timeOutError").style.display = "block";
     valid = false;
   } else {
     document.getElementById("timeOutError").style.display = "none";
   }
  //Vallidate name of the person taking the baby
  const status = document.getElementById("status").value;
  if (!status.trim()) {
    document.getElementById("statusError").style.display = "block";
    valid = false;
  } else {
    document.getElementById("statusError ").style.display = "none";
  }
  return valid;
}
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("Registration Form")
    .addEventListener("submit", function (event) {
      if (!validateForm()) {
        event.preventDefault();
      }
    });
});
