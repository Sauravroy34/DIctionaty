let place_name = document.getElementById("city")
let button = document.getElementById("search")

//let place = place_name.value;

button.addEventListener("click", () => {
    let place = place_name.value
    p = fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/hello`)

    p.then((response) => {
        return response.json()
    })

   
})


