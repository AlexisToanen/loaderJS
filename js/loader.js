window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden";
    const stopload = this.document.querySelector(".spinner");
    stopload.classList.add("stop");
});
