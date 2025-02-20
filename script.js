body {
    font-family: 'Arial', sans-serif;
    background: linear-gradient(to bottom, #f0f0f0, #ffffff);
    color: #333;
    margin: 0;
    padding: 0;
    text-align: center;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

header {
    background: linear-gradient(to right, #28a745, #218838);
    color: white;
    padding: 20px;
    text-align: center;
}

header h1 {
    font-size: 2em;
    margin: 0;
}

.quran-text {
    font-family: 'Kufi', Arial, sans-serif;
    font-size: 1.2em;
    margin: 5px 0;
}

nav {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin: 20px 0;
}

nav button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 1em;
    border-radius: 5px;
}

nav button:hover {
    background-color: #0056b3;
}

.menu {
    display: none;
    background-color: rgba(40, 167, 69, 0.9);
    padding: 10px;
    position: fixed;
    top: 0;
    right: 0;
    width: 200px;
    height: 100%;
    z-index: 1000;
    transition: transform 0.3s ease;
    transform: translateX(100%);
}

.menu.active {
    transform: translateX(0);
}

.menu ul {
    list-style: none;
    padding: 0;
}

.menu ul li {
    margin: 10px 0;
}

.menu ul li a {
    color: white;
    text-decoration: none;
    font-size: 1.2em;
}

main {
    flex: 1;
    padding: 20px;
    margin-top: 20px;
}

footer {
    background-color: #007bff;
    color: white;
    padding: 10px;
    text-align: center;
}

.hidden {
    display: none;
}

#login, #signup {
    margin: 20px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-width: 400px;
}

#loginForm, #signupForm {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

#loginForm input, #signupForm input, #signupForm select {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1em;
}

#loginForm button, #signupForm button {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    font-size: 1.1em;
    border-radius: 5px;
}

#loginForm button:hover, #signupForm button:hover {
    background-color: #218838;
}

#loginMessage, #signupMessage {
    margin-top: 10px;
    color: red;
    font-size: 0.9em;
}

#schoolsList li {
    display: block;
    margin: 10px 0;
}
