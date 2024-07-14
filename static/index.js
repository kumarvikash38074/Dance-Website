// alert("Your form has been submitted")
function validateForm(form) {
    // Your validation code here (e.g., check if fields are filled out correctly)
    if (!valid) {
        alert('Please correct the errors in the form!');
        return false;
    } else {
        return confirm('Do you really want to submit the form?');
    }
}
