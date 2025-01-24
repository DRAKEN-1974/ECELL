/* filepath: /c:/Users/itachi/ECELL/snow.js */

function createSnowflakes() {
    const snowContainer = document.createElement('div');
    snowContainer.style.position = 'fixed';
    snowContainer.style.top = '0';
    snowContainer.style.left = '0';
    snowContainer.style.width = '100%';
    snowContainer.style.height = '100%';
    snowContainer.style.pointerEvents = 'none';
    snowContainer.style.zIndex = '1';
    
    // Create 50 snowflakes
    for (let i = 0; i < 50; i++) {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.innerHTML = '❅';
      snowflake.style.left = Math.random() * 100 + '%';
      snowflake.style.animationDuration = Math.random() * 3 + 5 + 's';
      snowflake.style.opacity = Math.random();
      snowflake.style.fontSize = (Math.random() * 10 + 10) + 'px';
      snowContainer.appendChild(snowflake);
    }
    
    document.body.appendChild(snowContainer);
  }
  
  // Call the function when the page loads
  window.addEventListener('load', createSnowflakes);