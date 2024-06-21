document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const cursor = document.querySelector('.cursor');
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let lastMouseX = 0, lastMouseY = 0;
    let rotation = 0;

    const options = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
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
        const deltaX = mouseX - lastMouseX;
        const deltaY = mouseY - lastMouseY;

        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;

        rotation = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) rotate(${rotation}deg)`;

        lastMouseX = mouseX;
        lastMouseY = mouseY;

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

    // Three.js setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const particles = new THREE.Geometry();
    const particleMaterial = new THREE.PointsMaterial({ color: 0xFFFFFF, size: 2 });

    const createParticles = () => {
        for (let i = 0; i < 10000; i++) {
            const x = (Math.random() - 0.5) * 1000;
            const y = (Math.random() - 0.5) * 1000;
            const z = (Math.random() - 0.5) * 1000;
            particles.vertices.push(new THREE.Vector3(x, y, z));
        }
    };

    createParticles();

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    camera.position.z = 100;

    const animate = () => {
        requestAnimationFrame(animate);
        particleSystem.rotation.y += 0.0005;
        renderer.render(scene, camera);
    };

    animate();

    document.addEventListener('mousemove', (event) => {
        particleSystem.rotation.x = event.clientY * 0.0001;
        particleSystem.rotation.y = event.clientX * 0.0001;
    });

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Menu item active state handling
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Remove the active class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            
            // Add the active class to the clicked link
            link.classList.add('active');
        });
    });
});
