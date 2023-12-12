/**
 * Initializes the VanillaTilt library on the specified container element.
 * @param {HTMLElement} container - The container element to apply the tilt effect to.
 * @param {Object} options - The options for configuring the tilt effect.
 * @param {number} options.max - The maximum tilt rotation in degrees.
 * @param {number} options.speed - The speed of the tilt animation in milliseconds.
 * @param {boolean} options.glare - Whether to enable the glare effect.
 * @param {number} options.max-glare - The maximum glare opacity.
 */
VanillaTilt.init(document.querySelector(".container"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.2
});

