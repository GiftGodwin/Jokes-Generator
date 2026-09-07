const jokeText = document.getElementById("joke-text");
const newJokeBtn = document.getElementById("new-joke-btn");
const copyBtn = document.getElementById("copy-btn");

function getJoke() {
    jokeText.textContent = "Getting a joke. . .";

    newJokeBtn.disabled = true;

    fetch("https://v2.jokeapi.dev/joke/Any?safe-mode&type=twopart")
        .then((response) => response.json())
        .then((data) => {
            jokeText.innerHTML = `${data.setup} 
            <br>
            ${data.delivery}`;

            newJokeBtn.disabled = false;
        })
        .catch((error) => {
            console.error("Error fetching joke:", error);
            jokeText.textContent = "Oops! Something went wrong. Please try again.";

            newJokeBtn.disabled =false;
        });
};

newJokeBtn.addEventListener("click", getJoke);

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(jokeText.textContent);

    copyBtn.textContent = "Copied!";
    setTimeout(() => {
        copyBtn.textContent = "Copy";
    }, 1000);
});


getJoke();