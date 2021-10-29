// Smooth scroll

const links = document.querySelectorAll('a[href^="#"]');

if (links.length) {
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        const id = document.querySelector(link.hash);
        const offset = 120;
        const target = id.offsetTop - offset;

        console.log(id);
        console.log(target);

        window.scroll({
          top: target,
          behavior: "smooth",
        });

        e.preventDefault();
      });
    });
}
