// frontend.js

const sitterForm = document.getElementById('sitterForm');
const sitterList = document.getElementById('sitterList');

// Fetch all sitters and display them
async function fetchSitters() {
  try {
    const response = await axios.get('/sitters');
    const sitters = response.data;
    sitterList.innerHTML = sitters.map(sitter => `<div>${sitter.name}, ${sitter.age}</div>`).join('');
  } catch (error) {
    console.error('Error fetching sitters:', error);
  }
}

// Add a new sitter
sitterForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  try {
    await axios.post('/sitters', { name, age });
    fetchSitters();
  } catch (error) {
    console.error('Error adding sitter:', error);
  }
});

// Initial fetch of sitters
fetchSitters();

function goBack() {
  window.history.back();
}

document.getElementById("babiesForm").addEventListener("submit", function (event) {
  let valid = true;

  // Helper function to show/hide error messages
  function validateField(fieldId, errorId, condition) {
    const errorElement = document.getElementById(errorId);
    if (condition) {
      errorElement.style.display = "inline";
      valid = false;
    } else {
      errorElement.style.display = "none";
    }
  }

  // Validate each field
  validateField("name", "nameError", !document.getElementById("name").value);
  validateField("age", "ageError", !document.getElementById("age").value);
  validateField("location", "locationError", !document.getElementById("location").value);
  validateField("dob", "dobError", !document.getElementById("dob").value);
  validateField("gender", "genderError", !document.getElementById("gender").value);
  validateField("nextOfKin", "nextOfKinError", !document.getElementById("nextOfKin").value);
  validateField("time", "timeError", !document.getElementById("time").value);
  validateField("parentName", "parentNameError", !document.getElementById("parentName").value);
  validateField("fees", "feesError", !document.getElementById("fees").value);
  validateField("periodofStay", "periodofStayError", !document.getElementById("periodofStay").value);
  validateField("paymentDate", "paymentDateError", !document.getElementById("paymentDate").value);
  validateField("babiesNumber", "babiesNumberError", !document.getElementById("babiesNumber").value);
  validateField("nameofpersontakingcare", "nameofpersontakingcareError", !document.getElementById("nameofpersontakingcare").value);
  validateField("timeOut", "timeOutError", !document.getElementById("timeOut").value);
  validateField("status", "statusError", !document.getElementById("status").value);

  // Prevent form submission if any field is invalid
  if (!valid) {
    event.preventDefault();
  }
});
