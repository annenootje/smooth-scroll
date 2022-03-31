// Smooth scroll

window.addEventListener('load', () => {
    const links = document.querySelectorAll('a[href^="#"]');

    if (links.length) {
        links.forEach((link) => {
            link.addEventListener("click", () => {
                const id = document.querySelector(link.hash);
                const target = id.getBoundingClientRect().top;

                window.scrollTo({
                    top: target,
                    left: 0,
                    behavior: "smooth",
                });
            });
        });
    }
});
