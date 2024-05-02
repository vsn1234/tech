document.addEventListener("DOMContentLoaded", function() {
    const scrollLeftBtn = document.getElementById("scrollLeftBtn");
    const scrollRightBtn = document.getElementById("scrollRightBtn");
    const gallery = document.querySelector(".gallery");

    scrollLeftBtn.addEventListener("click", function() {
        gallery.scroll({
            left: gallery.scrollLeft - 350,
            behavior: "smooth"
        });
    });

    scrollRightBtn.addEventListener("click", function() {
        gallery.scroll({
            left: gallery.scrollLeft+350,
            behavior: "smooth"
        });
    });
});
