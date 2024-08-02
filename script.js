const shareBtn = document.getElementById("share-btn");
const shareBtnBanner = document.getElementById("share-btn-banner");
const beforeClick = document.getElementById("before-click");
const afterClick = document.getElementById("after-click");
const afterClickDesktop = document.getElementById("after-click-desktop");

function handleDocumentClick(event) {
  if (!shareBtn.contains(event.target) && !afterClickDesktop.contains(event.target)) {
    afterClickDesktop.style.display = "none";
  }
}

function updateView() {
  if (window.innerWidth >= 1440) {
    // Reset the state for desktop mode
    afterClick.style.display = "none";
    afterClickDesktop.style.display = "none";
    
    shareBtn.addEventListener("click", () => {
      afterClickDesktop.style.display = "flex";
    });

    document.addEventListener("click", handleDocumentClick);
  } else {
    // Reset the state for mobile mode
    document.removeEventListener("click", handleDocumentClick);
    afterClickDesktop.style.display = "none";
    
    shareBtn.addEventListener("click", () => {
      beforeClick.style.visibility = "hidden";
      afterClick.style.visibility = "visible";
      beforeClick.style.display = "none";
      afterClick.style.display = "flex";
    });

    shareBtnBanner.addEventListener("click", () => {
      beforeClick.style.visibility = "visible";
      afterClick.style.visibility = "hidden";
      beforeClick.style.display = "flex";
      afterClick.style.display = "none";
    });
  }
}

// Run on load and resize
window.addEventListener("load", updateView);
window.addEventListener("resize", updateView);