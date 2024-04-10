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

// const form = document.getElementById('babiesForm');

//     form.addEventListener('submit', function(event) {
//       event.preventDefault(); // Prevent form submission
      
//       // Validate each input field
//       const nameInput = document.getElementById('name');
//       const ageInput = document.getElementById('age');
//       const locationInput = document.getElementById('location');
//       const dobInput = document.getElementById('dob');
//       const genderInput = document.getElementById('gender');

//       const nameError = document.getElementById('nameError');
//       const ageError = document.getElementById('ageError');
//       const locationError = document.getElementById('locationError');
//       const dobError = document.getElementById('dobError');
//       const genderError = document.getElementById('genderError');

//       nameError.textContent =  '' fill in the right name;
//       ageError.textContent = '';
//       locationError.textContent = '';
//       dobError.textContent = '';
//       genderError.textContent = '';

//       if (nameInput.value.length === 0) {
//         nameError.textContent = 'Please fill in the name.';
//       } else if (nameInput.value.length < 8 || nameInput.value.length > 120) {
//         nameError.textContent = 'Name should be between 8 and 120 characters.';
//       }

//       if (isNaN(ageInput.value) || ageInput.value <= 0) {
//         ageError.textContent = 'Please provide a valid age.';
//       }

//       if (locationInput.value.length === 0) {
//         locationError.textContent = 'Please fill in the location.';
//       }

//       // Add more validation rules for other fields as needed

//       // Check if any error messages are present
//       const errorMessages = document.querySelectorAll('.error');
//       let hasErrors = false;
//       errorMessages.forEach(error => {
//         if (error.textContent.length > 0) {
//           hasErrors = true;
//         }
//       });

//       // If there are no errors, submit the form
//       if (!hasErrors) {
//         form.submit();
//       }
//     });