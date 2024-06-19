document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const loadingText = document.getElementById('loading-text');
    const languages = ["Loading...", "Cargando...", "Chargement...", "Laden...", "Загрузка..."];
    let index = 0;

    function changeLoadingText() {
        loadingText.textContent = languages[index];
        index = (index + 1) % languages.length;
    }

    setInterval(changeLoadingText, 1000);

    setTimeout(() => {
        loadingScreen.classList.add('morph');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            document.body.style.overflow = 'auto'; // Enable scrolling after loading screen
        }, 1000); // Ensure this matches the transition duration
    }, 3000); // Hide loading screen after 3 seconds

    // Existing cursor animation code
    const sections = document.querySelectorAll('section');
    const cursor = document.querySelector('.cursor');
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    const options = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelector('h2').style.opacity = 1;
                entry.target.querySelector('h2').style.transform = 'translateY(0)';
                entry.target.querySelector('p').style.opacity = 1;
                entry.target.querySelector('p').style.transform = 'translateY(0)';
            } else {
                entry.target.querySelector('h2').style.opacity = 0;
                entry.target.querySelector('h2').style.transform = 'translateY(50px)';
                entry.target.querySelector('p').style.opacity = 0;
                entry.target.querySelector('p').style.transform = 'translateY(50px)';
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.1; // Smooth follow
        cursorY += (mouseY - cursorY) * 0.1;
        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
        requestAnimationFrame(animateCursor);
    }

    animateCursor();
});
