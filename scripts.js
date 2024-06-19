document.addEventListener('DOMContentLoaded', () => {
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

    // Typing text animation code
    const typingTextElement = document.querySelector('.typing-text');
    const texts = ["IT", "3D Designer", "WLC&AP Designer", "Game Dev", "Web Dev", "Analyst"];
    let textIndex = 0;
    let charIndex = 0;
    let typing = true;

    function typeText() {
        if (typing) {
            if (charIndex < texts[textIndex].length) {
                typingTextElement.textContent += texts[textIndex].charAt(charIndex);
                charIndex++;
                setTimeout(typeText, 100); // Typing speed
            } else {
                typing = false;
                setTimeout(typeText, 2000); // Pause before erasing
            }
        } else {
            if (charIndex > 0) {
                typingTextElement.textContent = texts[textIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(typeText, 100); // Erasing speed
            } else {
                typing = true;
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(typeText, 500); // Pause before typing the next word
            }
        }
    }

    typeText(); // Start the typing animation

    // Dark mode toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.querySelector('header').classList.toggle('dark-mode');
        const contentElements = document.querySelectorAll('.content, h2, p');
        contentElements.forEach(element => {
            element.classList.toggle('dark-mode');
        });
        if (document.body.classList.contains('dark-mode')) {
            darkModeToggle.textContent = 'Light Mode';
        } else {
            darkModeToggle.textContent = 'Dark Mode';
        }
    });
});
