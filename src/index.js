"use-strict";

(function () {
    window.addEventListener("load", init);

    function init() {
        document.getElementById("find-more-container").addEventListener("click", toResume);
        id("about-website").addEventListener("click", toAboutWebsite);
        document.getElementById("image-container").addEventListener("click", startRoll);
    }

    function toAboutWebsite() {
        toggleOff();
        hide(id("resume-container"));
        hide(id("about-container"));
        hide(id("about-website"));
        show(id("about-website-container"));
        id("find-more-container").removeEventListener("click", toResume);
        id("find-more-container").addEventListener("click", toFrontPage);
        qs("#find-more-container p").textContent = "Home";
        scrollToTop();
    }

    function toResume() {
        toggleOff();
        hide(document.getElementById("about-container"));
        hide(id("about-website-container"));
        show(document.getElementById("resume-container"));
        id("find-more-container").removeEventListener("click", toResume);
        id("find-more-container").addEventListener("click", toFrontPage);
        qs("#find-more-container p").textContent = "Go Back";
        let cards = qsa("#resume-container div");
        for (let i = 0; i < cards.length; i++) {
            cards[i].addEventListener("click", toggleOn);
        }
        scrollToTop();
    }

    function toggleOn() {
        id("find-more-container").removeEventListener("click", toFrontPage);
        id("find-more-container").addEventListener("click", toResume);
        hide(id("resume-container"));
        show(id("category-container"));
        show(id(this.id + "-cat"));
    }

    function toggleOff() {
        let cards = qsa("#category-container div");
        for (let i = 0; i < cards.length; i++) {
            hide(cards[i]);
        }
        hide(id("category-container"));
        show(id("resume-container"));
    }

    function toFrontPage() {
        document.getElementById("image-container").addEventListener("click", startRoll);
        hide(id("resume-container"));
        hide(id("about-website-container"));
        show(id("about-container"));
        show(id("about-website"));
        id("find-more-container").removeEventListener("click", toFrontPage);
        id("find-more-container").addEventListener("click", toResume);
        qs("#find-more-container p").textContent = "Click here to find out more about me.";
        scrollToTop();
    }

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function id(id) {
        return document.getElementById(id);
    }

    function qs(selector) {
        return document.querySelector(selector);
    }

    function qsa(selector) {
        return document.querySelectorAll(selector);
    }

    function show(element) {
        if (element.classList.contains("hidden")) {
            element.classList.remove("hidden");
        }
    }

    function hide(element) {
        if (!element.classList.contains("hidden")) {
            element.classList.add("hidden");
        }
    }

    //Courtesy of Lalitheswar
    let roll_on = 0;
    function doBarrelRoll()
    {
        document.body.style.msTransform='rotate(360deg)';
        document.body.style.msTransitionDuration='4s';
        document.body.style.msTransitionProperty='all';
        document.body.style.MozTransform='rotate(360deg)';
        document.body.style.MozTransitionDuration='4s';
        document.body.style.MozTransitionProperty='all';
        document.body.style.WebkitTransform='rotate(360deg)';
        document.body.style.WebkitTransitionDuration='4s';
        document.body.style.WebkitTransitionProperty='all';
        document.body.style.OTransform='rotate(360deg)';
        document.body.style.OTransitionDuration='4s';
        document.body.style.OTransitionProperty='all';
        setTimeout("document.body.removeAttribute('style'); roll_on = 0;",4000);
    }

    function startRoll()
    {
        if (!roll_on)
        {
            roll_on=1;
            doBarrelRoll();
        }
        roll_on=0
    }
})();