document.addEventListener('DOMContentLoaded', () => {
  const adjectives = [
    'Innovative',
    'Ambitious',
    'Elegant',
    'Agile',
    'Resourceful',
    'Creative',
    'Collaborative',
    'Aesthetic',
  ]
  const displayElement = document.getElementById('adjective-display')
  let index = 0

  if (!displayElement) {
    console.error('Display element not found!')
    return
  }

  const updateAdjective = () => {
    displayElement.style.transition = 'none' // Remove previous transition
    displayElement.style.transform = 'translateX(-100vw)' // Move off-screen to the far left

    setTimeout(() => {
      displayElement.innerText = adjectives[index]
      displayElement.style.transition = 'transform 1s ease-out'
      displayElement.style.transform = 'translateX(0)' // Slide to center

      setTimeout(() => {
        displayElement.style.transition = 'transform 1s ease-in'
        displayElement.style.transform = 'translateX(100vw)' // Slide out to the far right
      }, 2000) // Pause duration in center
    }, 200) // Delay before updating text to avoid overlap

    index = (index + 1) % adjectives.length // Update index
  }

  updateAdjective() // Initial call
  setInterval(updateAdjective, 3100) // Update every 3.1 seconds
})
