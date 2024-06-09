function animation() {
  const containers = document.querySelectorAll(".container > div");

  containers.forEach((container) => {
    const img = container.querySelector("img");
    const imageInfo = container.querySelector(".image-info");
    const link = container.querySelector("a");

    // Add event listeners for hover effect
    container.addEventListener("mouseenter", function () {
      imageInfo.style.top = "calc(100vh - 140px)";
      img.style.transform = "scale(1.1)";
      img.style.webkitFilter = "grayscale(100%)";
      img.style.filter = "blur(6px) grayscale(100%)";
      img.style.opacity = "0.5";
      link.style.visibility = "unset";
    });

    container.addEventListener("mouseleave", function () {
      imageInfo.style.top = "calc(100vh - 100px)";
      img.style.transform = "scale(1)";
      img.style.webkitFilter = "grayscale(0)";
      img.style.filter = "none";
      img.style.opacity = "1";
      link.style.visibility = "hidden";
    });
  });
}

// Call the function to listen all the time
animation();
