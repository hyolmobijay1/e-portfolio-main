 // Form validation script
 document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    // Form fields
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    const privacyCheckbox = document.getElementById('privacyPolicy');
    
    // Error elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const subjectError = document.getElementById('subjectError');
    const messageError = document.getElementById('messageError');
    const privacyError = document.getElementById('privacyError');
    
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;
        
        // Reset previous errors
        resetErrors();
        
        // Validate name
        if (nameInput.value.trim() === '') {
            showError(nameInput, nameError);
            isValid = false;
        }
        
        // Validate email
        if (!emailRegex.test(emailInput.value.trim())) {
            showError(emailInput, emailError);
            isValid = false;
        }
        
        // Validate subject
        if (subjectInput.value.trim() === '') {
            showError(subjectInput, subjectError);
            isValid = false;
        }
        
        // Validate message
        if (messageInput.value.trim() === '') {
            showError(messageInput, messageError);
            isValid = false;
        }
        
        // Validate privacy policy
        if (!privacyCheckbox.checked) {
            privacyError.style.display = 'block';
            isValid = false;
        }
        
        // If form is valid, submit it (or show success message)
        if (isValid) {
            alert('Form submitted successfully!');
            contactForm.reset();
        }
    });
    
    // Reset form button
    contactForm.addEventListener('reset', function() {
        resetErrors();
    });
    
    // Show error function
    function showError(input, errorElement) {
        input.classList.add('error');
        errorElement.style.display = 'block';
    }
    
    // Reset errors function
    function resetErrors() {
        // Reset all inputs
        nameInput.classList.remove('error');
        emailInput.classList.remove('error');
        subjectInput.classList.remove('error');
        messageInput.classList.remove('error');
        
        // Hide all error messages
        nameError.style.display = 'none';
        emailError.style.display = 'none';
        subjectError.style.display = 'none';
        messageError.style.display = 'none';
        privacyError.style.display = 'none';
    }
    
    // Add input event listeners to clear errors when user types
    nameInput.addEventListener('input', function() {
        this.classList.remove('error');
        nameError.style.display = 'none';
    });
    
    emailInput.addEventListener('input', function() {
        this.classList.remove('error');
        emailError.style.display = 'none';
    });
    
    subjectInput.addEventListener('input', function() {
        this.classList.remove('error');
        subjectError.style.display = 'none';
    });
    
    messageInput.addEventListener('input', function() {
        this.classList.remove('error');
        messageError.style.display = 'none';
    });
    
    privacyCheckbox.addEventListener('change', function() {
        if (this.checked) {
            privacyError.style.display = 'none';
        }
    });
});