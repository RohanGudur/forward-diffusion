# Forward Diffusion

The **forward diffusion process** is a technique used in diffusion models where noise is gradually added to an image at each step.
The model learns to predict how much noise was added at each time step and attempts to recover the original distribution.

The link below shows the step-by-step increment of noise until the image is no longer recognizable:

[Forward Diffusion](https://rohangudur.github.io/forward-diffusion/)

As you move the slider, you'll notice the gradual increase in noise, simulating the forward diffusion process. This noise is sampled from a known distribution (Gaussian in this case). The addition of noise helps in training deep learning models to predict the noise at each step, enabling the model to reverse the process.

