let step = 0; // Variable to track the current step
let autoScrollInterval; // Variable for the auto scroll interval

function updateImage() {
    const slider = document.getElementById('slider');
    slider.value = step; // Update slider value
    document.getElementById('stepLabel').innerText = step;

    const imageElement = document.getElementById('diffusionImage');
    imageElement.src = `images/image_step_${step}.png`;
    imageElement.alt = `Image at Step ${step}`;

    imageElement.onerror = function() {
        this.src = 'images/image_not_found.png'; // Placeholder for missing image
        this.alt = 'Image not available';
    };
}

function startAutoScroll() {
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('stopButton').style.display = 'inline-block'; // Show stop button
    document.getElementById('slider').disabled = true; // Disable the slider during auto scroll

    autoScrollInterval = setInterval(() => {
        if (step < 500) {
            step += 10; // Increment step
            updateImage();
        } else {
            stopScroll(); // Stop if we reach the last step
        }
    }, 500); // Change image every 500ms
}

function stopScroll() {
    clearInterval(autoScrollInterval); // Stop the interval
    document.getElementById('stopButton').style.display = 'none'; // Hide stop button
    document.getElementById('startButton').style.display = 'inline-block'; // Show start button again
    document.getElementById('slider').disabled = false; // Re-enable the slider
}

// Optional reset function, in case needed
function resetScroll() {
    step = 0; // Reset step to 0
    updateImage(); // Show the first image again
}
