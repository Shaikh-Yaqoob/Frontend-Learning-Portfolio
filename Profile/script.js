document.getElementById('uploadButton').addEventListener('click', function() {
  document.getElementById('fileUpload').click();
});

document.getElementById('fileUpload').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
          document.getElementById('profilePhoto').src = e.target.result;
          document.getElementById('removePhoto').style.display = 'inline-block';
      };
      reader.readAsDataURL(file);
  }
});

document.getElementById('removePhoto').addEventListener('click', function() {
  document.getElementById('profilePhoto').src = 'https://via.placeholder.com/100';
  document.getElementById('fileUpload').value = ''; // Clear the file input
  document.getElementById('removePhoto').style.display = 'none';
});

document.getElementById('saveButton').addEventListener('click', function() {
  if (validateForm()) {
      document.getElementById('fullName').innerText = document.getElementById('fullNameInput').value;
      document.getElementById('mobileNumber').innerText = document.getElementById('mobile').value;
      document.getElementById('email').innerText = document.getElementById('emailInput').value;
  
      disableForm();
      showConfirmationMessage();
  }
});

document.getElementById('editButton').addEventListener('click', function() {
  enableForm();
});

function disableForm() {
  document.getElementById('profileForm').querySelectorAll('input, select').forEach(function(input) {
      input.disabled = true;
  });
  document.getElementById('saveButton').style.display = 'none';
}

function enableForm() {
  document.getElementById('profileForm').querySelectorAll('input, select').forEach(function(input) {
      input.disabled = false;
  });
  document.getElementById('saveButton').style.display = 'inline-block';
}

// Form Validation
function validateForm() {
  const mobile = document.getElementById('mobile').value;
  const email = document.getElementById('emailInput').value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mobileRegex = /^\d{10,12}$/; // Example for a 10-12 digit number

  if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return false;
  }
  if (!mobileRegex.test(mobile)) {
      alert('Please enter a valid mobile number (10-12 digits).');
      return false;
  }
  return true;
}

// Confirmation Message
function showConfirmationMessage() {
  const confirmation = document.getElementById('confirmationMessage');
  confirmation.style.display = 'block';
  setTimeout(() => {
    confirmation.style.display = 'none';
  }, 3000); // Hide after 3 seconds
}
