const shareBtn = document.getElementById("share-btn");
const shareBtnBanner = document.getElementById("share-btn-banner");
const beforeClick = document.getElementById("before-click");
const afterClick = document.getElementById("after-click");

shareBtn.addEventListener("click", () => {
    beforeClick.style.visibility = "hidden";
    afterClick.style.visibility = "visible";
});

shareBtnBanner.addEventListener("click", () => {
    beforeClick.style.visibility = "visible";
    afterClick.style.visibility = "hidden";
});