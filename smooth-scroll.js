const links = document.querySelectorAll('a[href^="#"]');

if (links.length) {
    links.forEach(link => {

        link.addEventListener('click', (e) => {
            const id = document.querySelector(link.hash);
            const offset = 50; // Set to your own wishes
            const target = id.getBoundingClientRect().top - offset;
        
            window.scroll({
                top: target,
                behavior: 'smooth'
            });
        
            e.preventDefault();
        });
    });
}
