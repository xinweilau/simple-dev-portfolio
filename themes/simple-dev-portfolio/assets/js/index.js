window.onload = () => {
    // initialise animation for auto scroll
    const links = document.querySelectorAll("nav a:not(.inline-block)");
    links.forEach(() => addEventListener("click", scrollToLocation));
};

function scrollToLocation(e) {
    const href = e.target.getAttribute("href");

    if (href && href[0] === "#") {
        e.preventDefault();
        const offsetTop = document.querySelector(href).offsetTop;
        const vh = window.innerHeight;

        scroll({
            top: offsetTop - vh * 0.05,
            behavior: "smooth",
        });
    }
}
