document.addEventListener("DOMContentLoaded", function () {

    /* === MATERIALIZE INIT === */

    const sidenav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenav, { closeOnClick: true });

    const parallax = document.querySelectorAll(".parallax");
    M.Parallax.init(parallax);

    const scrollspy = document.querySelectorAll(".scrollspy");
    M.ScrollSpy.init(scrollspy);

    const tooltips = document.querySelectorAll(".tooltipped");
    M.Tooltip.init(tooltips, { enterDelay: 50 });

    const counters = document.querySelectorAll("input#input_text, textarea#textarea1");
    M.CharacterCounter.init(counters);

    /* === CAROUSEL AUTOPLAY ===*/

    const elems = document.querySelectorAll('.carousel');
    const instances = M.Carousel.init(elems, {
        fullWidth: true,
        indicators: true
    });

    setInterval(function() {
        const instance = M.Carousel.getInstance(elems[0]);
        instance.next();
    }, 4500);

    /* === SMOOTH SCROLL === */

    document.querySelectorAll("a.scroll").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });

    /* === NAVBAR FIXED ON SCROLL === */

    const navbar = document.getElementById("navbar");
    const list = document.getElementById("list");
    const button = document.querySelector(".button-collapse");
    const link = document.querySelectorAll(".valign-wrapper");

    if (navbar) {
        const menuOffset = navbar.offsetTop;

        window.addEventListener("scroll", function () {

        if (window.scrollY > menuOffset) {
            navbar.classList.add("fixed", "white", "z-depth-1");
            navbar.classList.remove("transparent", "z-depth-0");

            link.forEach(el => el.classList.add("blue-grey-text", "text-darken-1"));
            if (button) button.classList.add("teal-text");
            if (list) list.classList.add("menuscroll");

        } else {
            navbar.classList.remove("fixed", "white", "z-depth-1");
            navbar.classList.add("transparent", "z-depth-0");

            link.forEach(el => el.classList.remove("blue-grey-text", "text-darken-1"));
            if (button) button.classList.remove("teal-text");
            if (list) list.classList.remove("menuscroll");
        }
        });
    }

    /* === SCROLL UP BUTTON === */
    const scrollUp = document.querySelector(".scrollup");

    if (scrollUp) {

        window.addEventListener("scroll", function () {
        scrollUp.style.display = window.scrollY > 100 ? "block" : "none";
        });

        scrollUp.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        });
    }
});