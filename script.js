document.addEventListener("DOMContentLoaded", function() {
    const shareBtn = document.getElementById("share-btn");
    const shareBanner = document.getElementById("share-banner");
    const beforeClick = document.getElementById("before-click");
  
    shareBtn.addEventListener("click", function() {
      if (shareBanner.classList.contains("hidden")) {
        shareBanner.classList.remove("hidden");
        beforeClick.classList.add("hidden");
      } else {
        shareBanner.classList.add("hidden");
        beforeClick.classList.remove("hidden");
      }
    });
  });
  