// mooie prompt voor naam
const owntext = document.querySelector(".owntext");
function startPrompt() {
    let promptname = prompt("geef je naam!");
    if (promptname != null) {
        localStorage.setItem("name", promptname);
        promptStorage()
    }
}
// startPrompt()
function promptStorage() {
    owntext.textContent = localStorage.getItem('name');
}

// button om naam te veranderen
const promptButton = document.querySelector(".promptButton");
promptButton.addEventListener("click", startPrompt);