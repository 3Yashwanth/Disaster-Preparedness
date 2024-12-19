window.onload = () => {
    // Get the checkmark elements
    const bluetoothCheck = document.getElementById('bluetoothCheck');
    const speakerCheck = document.getElementById('speakerCheck');
    const monitorCheck = document.getElementById('monitorCheck');
    
    const nextButton = document.getElementById('nextButton');
    
    // Function to animate checkmark
    const animateCheckmark = (checkmarkElement) => {
      setTimeout(() => {
        checkmarkElement.style.opacity = '1';
        checkmarkElement.style.transform = 'scale(1)';
      }, 500);  // Delay for better animation sequencing
    };
    
    // Animate each checkmark in sequence
    setTimeout(() => {
      bluetoothCheck.style.opacity = '1';
      bluetoothCheck.style.transform = 'scale(1)';
      animateCheckmark(bluetoothCheck);
    }, 1000);
    
    setTimeout(() => {
      speakerCheck.style.opacity = '1';
      speakerCheck.style.transform = 'scale(1)';
      animateCheckmark(speakerCheck);
    }, 2000);
    
    setTimeout(() => {
      monitorCheck.style.opacity = '1';
      monitorCheck.style.transform = 'scale(1)';
      animateCheckmark(monitorCheck);
    }, 3000);
  
    // Show the "Next" button after all checkmarks are visible
    setTimeout(() => {
      nextButton.style.display = 'block';
    }, 3500);
  
    // Handle the Next button click
    nextButton.addEventListener('click', () => {
      window.location.href = "nextpage.html";  // Replace with your next page URL
    });
  };