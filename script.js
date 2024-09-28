function updateImage() {
    // Get the current slider value
    const step = document.getElementById('slider').value;
    document.getElementById('stepLabel').innerText = step;

    // Update the image source based on the selected step
    const imageElement = document.getElementById('diffusionImage');
    imageElement.src = `images/image_step_${step}.png`;
    imageElement.alt = `Image at Step ${step}`;
}
