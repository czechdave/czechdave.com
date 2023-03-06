function simulateGravity(element: HTMLElement) {
  // Get the element dimensions and position
  const elementRect = element.getBoundingClientRect();
  let x = elementRect.left;
  let y = elementRect.top;

  // Set up the initial velocity and acceleration
  let vx = 0;
  let vy = 0;
  const ax = 0;
  const ay = 0.1; // acceleration due to gravity

  // Add a mousemove event listener to detect when the mouse is near the element
  document.addEventListener("mousemove", (event) => {
    // Get the position of the mouse
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Calculate the distance between the mouse and each edge of the element
    const leftDistance = mouseX - x;
    const rightDistance = x + elementRect.width - mouseX;
    const topDistance = mouseY - y;
    const bottomDistance = y + elementRect.height - mouseY;

    // If the mouse is near any edge of the element, accelerate the element away from the mouse
    const maxDistance = 5;
    if (leftDistance < maxDistance && vx > -5) {
      vx -= 0.5;
    }
    if (rightDistance < maxDistance && vx < 5) {
      vx += 0.5;
    }
    if (topDistance < maxDistance && vy > -5) {
      vy -= 0.5;
    }
    if (bottomDistance < maxDistance && vy < 5) {
      vy += 0.5;
    }
  });

  // Start the animation loop
  function animate() {
    // Update the velocity and position
    vx += ax;
    vy += ay;
    x += vx;
    y += vy;

    // Update the element position
    element.style.transform = `translate(${x}px, ${y}px)`;

    // Bounce the element off the edges of the viewport
    if (x < 0) {
      x = 0;
      vx *= -0.8;
    }
    if (x - elementRect.width > window.innerWidth) {
      x = window.innerWidth - elementRect.width;
      vx *= -0.8;
    }
    if (y < 0) {
      y = 0;
      vy *= -0.8;
    }
    if (y + elementRect.height > window.innerHeight) {
      y = window.innerHeight - elementRect.height;
      vy *= -0.8;
    }

    // Request the next frame of the animation
    const animationId = requestAnimationFrame(animate);
  }

  // Start the animation loop
  animate();
}

export default simulateGravity;
