document.addEventListener('DOMContentLoaded', () => {
  const animateText = (elementId) => {
    const element = document.getElementById(elementId)
    const text = element.innerText
    element.innerHTML = ''

    // Create spans and collect them into an array
    const spans = text.split('').map((char, index) => {
      const span = document.createElement('span')
      // Replace space with non-breaking space to preserve it
      span.innerHTML = char === ' ' ? '&nbsp;' : char
      span.style.setProperty('--i', index)
      element.appendChild(span)

      // Initial position above the screen
      span.style.position = 'relative'
      span.style.top = '-1000px' // Start high above the screen

      return span
    })

    // Shuffle the spans array for random drop order
    for (let i = spans.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[spans[i], spans[j]] = [spans[j], spans[i]]
    }

    // Animate each span
    spans.forEach((span, index) => {
      setTimeout(() => {
        dropAndBounce(span)
      }, index * 50) // Randomized delay
    })
  }

  const dropAndBounce = (element) => {
    let position = -1000 // Initial position above the screen
    const gravity = 0.5 // Increased gravity effect
    let velocity = 0
    const bounceDamping = 0.4 // Less bounce height
    const bounceThreshold = 2 // Minimum velocity to trigger a bounce
    const settleThreshold = 1 // Position threshold to settle
    const groundPosition = 0 // Final position

    const animate = () => {
      velocity += gravity // Increase velocity due to gravity
      position += velocity // Update position based on velocity

      // Check for bounce
      if (position >= groundPosition) {
        position = groundPosition // Reset position to ground
        velocity = -velocity * bounceDamping // Reverse and dampen velocity

        // If the bounce is small enough, stop bouncing
        if (Math.abs(velocity) < bounceThreshold) {
          position = groundPosition
          velocity = 0
        }
      }

      // Apply position to element
      element.style.top = `${position}px`

      // Continue animation if not settled
      if (
        Math.abs(position - groundPosition) > settleThreshold ||
        Math.abs(velocity) > bounceThreshold
      ) {
        requestAnimationFrame(animate)
      } else {
        element.style.top = `${groundPosition}px` // Ensure final position
      }
    }

    animate()
  }

  animateText('gravity-drop')
  animateText('gravity-subtext')
})
