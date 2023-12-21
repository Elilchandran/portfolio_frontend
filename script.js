// Wait for the DOM to be ready
$(document).ready(function () {

    // Intercept the form submission
    $('#contactForm').submit(function (e) {
        e.preventDefault(); // Prevent the default form submission

        // Get form data
        var formData = $(this).serialize();

        // Send an Ajax request to Formspree
        $.ajax({
            type: 'POST',
            url: 'https://formspree.io/f/xgegwkpy', // Replace with your Formspree email
            data: formData,
            dataType: 'json',
            success: function (response) {
                // Display a success message
                $('#response').html('Message sent successfully!');
            },
            error: function (error) {
                // Display an error message
                $('#response').html('Error sending message. Please try again.');
            }
        });
    });

});
