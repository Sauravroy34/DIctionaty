var x = 0;
const button = document.getElementById("search");
const next = document.getElementById("next");
const previous = document.getElementById("previous");

button.addEventListener("click", () => {
  const word = document.getElementById("city").value || "default_word"; 

  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then((response) => response.json())
    .then((data) => {
      const definitions = {}; 

      
      for (const meaning of data[0].meanings) {
        for (const definition of meaning.definitions) {
          definitions[definition.definition] = true;
        }
      }

      console.log(definitions); 

      
      document.getElementById("name").innerHTML = data[0].word;
      document.getElementById("tem").innerHTML = ""; 
      let nextDefinition = Object.keys(definitions)[x]; 
      document.getElementById("tem").innerHTML = nextDefinition; 

      next.addEventListener("click", () => {
        x++;
        if (x >= Object.keys(definitions).length) {
          x = 0; 
        }
        nextDefinition = Object.keys(definitions)[x];
        document.getElementById("tem").innerHTML = nextDefinition;
      });

      previous.addEventListener("click", () => {
        x--;
        if (x < 0) {
          x = Object.keys(definitions).length - 1;
        }
        nextDefinition = Object.keys(definitions)[x];
        document.getElementById("tem").innerHTML = nextDefinition;
      });
    })
    .catch((error) => {
      console.error(error);
     
    });
});

