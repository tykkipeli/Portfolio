document.addEventListener('DOMContentLoaded', () => {
  console.log('here')
  const container = document.querySelector('.fireworks-container')
  const fireworks = new Fireworks.default(container, {
    speed: 2, // Reduced speed for much slower particles
    acceleration: 1, // Reduced acceleration for slower build-up
    friction: 0.95,
    gravity: 0.85, // Reduced gravity for slower fall
    particles: 100,
    explosion: 5,
    trace: {
      hue: {
        min: 0,
        max: 360,
      },
      brightness: {
        min: 0, // Set brightness to 0 to make it invisible
        max: 0, // Set brightness to 0 to make it invisible
      },
      opacity: 0, // Ensure opacity is set to 0
    },
    hue: {
      min: 0,
      max: 360,
    },
    brightness: {
      min: 20, // Lower the minimum brightness
      max: 30, // Lower the maximum brightness
    },
    lineWidth: {
      explosion: {
        min: 1,
        max: 2,
      },
      trace: {
        min: 0,
        max: 0,
      },
    },
  })
  fireworks.start()
})
