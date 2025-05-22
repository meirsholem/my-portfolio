// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Create the button element
  const backToTopBtn = document.createElement("button");
  backToTopBtn.id = "backToTop";
  backToTopBtn.title = "Go to top";
  backToTopBtn.textContent = "↑ Top";

  // Style the button (you can move this part to style.css if preferred)
  backToTopBtn.style.position = "fixed";
  backToTopBtn.style.bottom = "40px";
  backToTopBtn.style.right = "30px";
  backToTopBtn.style.padding = "12px 18px";
  backToTopBtn.style.fontSize = "16px";
  backToTopBtn.style.backgroundColor = "#6e8efb";
  backToTopBtn.style.color = "#fff";
  backToTopBtn.style.border = "none";
  backToTopBtn.style.borderRadius = "8px";
  backToTopBtn.style.cursor = "pointer";
  backToTopBtn.style.boxShadow = "0 2px 6px rgba(0,0,0,0.3)";
  backToTopBtn.style.display = "none";
  backToTopBtn.style.zIndex = "999";

  // Add it to the body
  document.body.appendChild(backToTopBtn);

  // Show or hide the button based on scroll position
  window.addEventListener("scroll", function() {
    if (window.scrollY > 100) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  // Smooth scroll to top when button is clicked
  backToTopBtn.addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});

