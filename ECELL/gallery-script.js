document.addEventListener("DOMContentLoaded", () => {
    const galleries = document.querySelectorAll(".gallery-grid");
  
    galleries.forEach((gallery) => {
      let scrollPosition = 0;
  
      // Duplicate the images for seamless scrolling
      const images = gallery.querySelectorAll("img");
      images.forEach((img) => {
        const clone = img.cloneNode(true);
        gallery.appendChild(clone);
      });
  
      const scrollInterval = setInterval(() => {
        scrollPosition += 2; // Adjust speed
        gallery.scrollLeft = scrollPosition;
  
        // Loop scrolling
        if (scrollPosition >= gallery.scrollWidth / 2) {
          scrollPosition = 0;
        }
  
        // Highlight the center image
        const centerIndex = Math.floor(gallery.scrollLeft / (350 + 50)); // Image width + gap
        images.forEach((img, index) => {
          if (index === centerIndex % images.length) {
            img.classList.add("active");
          } else {
            img.classList.remove("active");
          }
        });
      }, 50); // Adjust the interval speed
    });
  });
  