body, html {
    margin: 0;
    padding: 0;
    font-family: 'Dosis', sans-serif;
    background: #f0f0f0; /* Merge header and body with Light Gray */
    color: #000; /* Change text color to black */
    overflow-x: hidden;
}

body.dark-mode {
    background: #121212; /* Dark background */
    color: #ffffff; /* Light text */
}

header {
    background: #f0f0f0; /* Match header background with body */
    color: #000; /* Change text color to black */
    padding: 20px;
    text-align: center;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-between; /* Adjust space for button */
}

header.dark-mode {
    background: #1e1e1e; /* Darker header background */
    color: #ffffff; /* Light text */
}

header nav ul {
    list-style: none;
    padding: 0;
    display: flex;
    align-items: center;
}

header nav ul li {
    margin: 0 15px;
    position: relative;
}

header nav ul li:not(:last-child)::after {
    content: '|'; /* Add a line between each word */
    position: absolute;
    right: -15px;
    color: #000; /* Line color */
}

header.dark-mode nav ul li:not(:last-child)::after {
    color: #ffffff; /* Light line color */
}

header nav ul li a {
    color: #000; /* Ensure navigation links are black */
    text-decoration: none;
    font-size: 1.2em;
    transition: color 0.3s;
}

header nav ul li a:hover {
    color: #008080; /* Change hover color to Teal */
}

header.dark-mode nav ul li a {
    color: #ffffff; /* Ensure navigation links are white */
}

section {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background 1s;
    color: #000; /* Ensure section text is black */
}

body.dark-mode section {
    background: #121212; /* Darker section background */
    color: #ffffff; /* Light text */
}

#section1 {
    background: #f0f0f0; /* Match section background with body */
}

#section2 {
    background: #f0f0f0; /* Match section background with body */
}

#section3 {
    background: #f0f0f0; /* Match section background with body */
}

#section4 {
    background: #f0f0f0; /* Match section background with body */
}

body.dark-mode #section1,
body.dark-mode #section2,
body.dark-mode #section3,
body.dark-mode #section4 {
    background: #121212; /* Darker section background */
    color: #ffffff; /* Light text */
}

.content {
    text-align: center;
    color: inherit; /* Ensure text inherits the body color */
}

.content h1 {
    font-size: 2.5em; /* Increase size of the "I'm a" and typing text */
    margin: 0;
    color: inherit; /* Ensure the "I'm a" text is the same as the body color */
}

body.dark-mode .content h1 {
    color: inherit; /* Ensure the "I'm a" text is the same as the body color */
}

.intro-text {
    font-size: inherit; /* Ensure intro text inherits the font size from h1 */
}

.typing-text {
    font-size: inherit; /* Ensure typing text inherits the font size from h1 */
    color: #228B22; /* Change typing text color to Teal */
    border-right: .1em solid #228B22; 
    white-space: nowrap;
    overflow: hidden;
    animation: typing 2s steps(40, end), blink-caret .75s step-end infinite;
}

body.dark-mode .typing-text {
    color: #80ff80; /* Light green text */
    border-right: .1em solid #80ff80; /* Light green border */
}

.content h2, .content p {
    color: inherit; /* Ensure h2 and p inherit the body color */
}

body.dark-mode .content h2,
body.dark-mode .content p {
    color: inherit; /* Ensure h2 and p inherit the body color */
}

.cursor {
    width: 20px;
    height: 20px;
    border: 2px solid #228B22; /* Change cursor to outlined circle in Teal */
    border-radius: 50%;
    position: fixed; /* Ensure it's always visible */
    pointer-events: none;
    transform: translate(-50%, -50%);
    transition: transform 0.1s ease-out; /* Smooth bubble-like motion */
    z-index: 1001; /* Ensure cursor is above all elements */
    background: none; /* Remove the fill inside the circle */
}

body.dark-mode .cursor {
    border: 2px solid #80ff80; /* Light green border in dark mode */
}

@keyframes typing {
    from { width: 0; }
    to { width: 100%; }
}

@keyframes blink-caret {
    from, to { border-color: transparent; }
    50% { border-color: #228B22; }
}

body.dark-mode @keyframes blink-caret {
    from, to { border-color: transparent; }
    50% { border-color: #80ff80; }
}
