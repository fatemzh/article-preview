const shareBtn = document.getElementById("share-btn");
const shareBtnBanner = document.getElementById("share-btn-banner");
const beforeClick = document.getElementById("before-click");
const afterClick = document.getElementById("after-click");

shareBtn.addEventListener("click", () => {
    beforeClick.style.display = "none";
    afterClick.style.display = "flex";  
});

shareBtnBanner.addEventListener("click", () => {
    beforeClick.style.display = "flex";  // Or "block" depending on your layout needs
    afterClick.style.display = "none";
});


// if(@media (min-width: 1440px)){
//   afterClick.style.visibility = "hidden";
//   shareBtn.onmouseover = () => {
//     afterClick.style.visibility = "visible";
//   }
// }