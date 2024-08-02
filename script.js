const shareBtn = document.getElementById("share-btn");
const shareBtnBanner = document.getElementById("share-btn-banner");
const beforeClick = document.getElementById("before-click");
const afterClick = document.getElementById("after-click");
const afterClickDesktop = document.getElementById("after-click-desktop");

function updateView() {
  if (window.innerWidth >= 1440) {
    shareBtn.addEventListener("mouseover", () => {
      afterClickDesktop.style.display = "flex";
    });

    shareBtn.addEventListener("mouseout", () => {
      afterClickDesktop.style.display = "none";
    });
  } else {

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
