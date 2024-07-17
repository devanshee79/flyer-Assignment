// Logic for radio button
const radioButtons = document.querySelectorAll('.carousel-controls input');
const carousel = document.querySelector('.carousel-inner');

radioButtons.forEach((radio, index) => {
    radio.addEventListener('change', () => {
        const offset = -index * 20;
        carousel.style.transform = `translateX(${offset}%)`;
    });
});


// logic for image changing

let previousContainer = document.getElementById('container2');

    function selectContainer(containerId) {
        const targetImage = document.getElementById('targetImage');
        const selectedContainer = document.getElementById(containerId);

        // Reset the background color of the previous container
        if (previousContainer && previousContainer !== selectedContainer) {
            previousContainer.classList.remove('special');
        }

        // Update the image based on the selected container
        if (containerId === 'container1') {
            targetImage.src = './assessts/img5.jpeg';
            targetImage.alt = 'Image 1';
        } else if (containerId === 'container2') {
            targetImage.src = './assessts/img6.jpeg';
            targetImage.alt = 'Image 2';
        } else if (containerId === 'container4') {
            targetImage.src = './assessts/img7.jpeg';
            targetImage.alt = 'Image 3';
        }

        selectedContainer.classList.add('special');

        previousContainer = selectedContainer;
    }



    // ContactUs form 
    $(document).ready(function() {
      $('#contactBtn').click(function(e) {
          e.preventDefault();
  
          // Validate the form data
          var email = $('#inputEmail').val();
          var firstName = $('#inputFirstName').val();
          var lastName = $('#inputLastName').val();
          var agreeCheck = $('#agreeCheck').prop('checked');
  
          // Basic validation example (you might want to add more robust validation)
          if (!email || !firstName || !lastName || !agreeCheck) {
              alert('Please fill in all required fields and agree to the terms.');
              return;
          }
  
          // Prepare the data to be sent
          var formData = {
              email: email,
              firstName: firstName,
              lastName: lastName,
              agreeCheck: agreeCheck
          };
  
          // Submit the form data using AJAX
          $.ajax({
              url: 'https://getform.io/f/ajjeovpa',
              method: 'POST',
              data: formData,
              success: function(response) {
                  // Handle success
                  alert('Form submitted successfully')
                  console.log('Form submitted successfully');
                  $('#exampleModal').modal('hide'); 
              },
              error: function(xhr, status, error) {
                  // Handle errors
                  console.log(error)
                  alert('Error submitting the form');
              }
          });
      });
  });
  
