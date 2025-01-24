document.querySelector("#contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const inputs = document.querySelectorAll("#contactForm input, #contactForm textarea");
    let valid = true;
  
    inputs.forEach((input) => {
      if (!input.value) {
        input.classList.add("error");
        valid = false;
      } else {
        input.classList.remove("error");
      }
    });
  
    if (!valid) {
      alert("Please fill in all the fields!");
    } else {
      alert("Form submitted successfully!");
    }
  });
  