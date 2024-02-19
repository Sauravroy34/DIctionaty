
// Ensure you have an element with ID "city" in your HTML

const button = document.getElementById("search");
button.addEventListener("click", () => {
    const word = document.getElementById("city").value || "default_word"; // Handle empty input
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data[0].word);
            document.getElementById("name").innerHTML=data[0].word
            means = (data[0].meanings[0].definitions[0].definition)
            example= (data[0].meanings[0].definitions[0].example)
            console.log(means)
            console.log(example)
            document.getElementById("tem").innerHTML=means
            document.getElementById("example"),innerHTML= example
        });
});