/*document.getElementById('fetchButton').addEventListener('click', fetchData);

function fetchData() {
    fetch('https://pokeapi.co/api/v2/pokemon') 
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('data').textContent = JSON.stringify(data);
        })
        .catch(error => {
            console.log('Fetch failed: ', error);
        });
}*/

/*window.onload = function() {
    fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(response => response.json())
        .then(data => {
            console.log("second: ", data);
function doStuff(data) {
                results = data;
                console.log('first: ', results);
                results.results.forEach((pokemon) => {
                  const div = document.createElement('div');
                  div.textContent = pokemon.name;
                  document.querySelector('main').appendChild(div);
                    // assumes you have a <main> element in your HTML document
                });
              }
            
        });
}

/*fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur')
  .then(response => response.json())
  .then(data => {
    console.log(data.sprites.front_default);
  });*/
  /*window.onload = function() {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=20')
      .then(response => response.json())
      .then(data => {
        data.results.forEach(pokemon => {
          fetch(pokemon.url)
            .then(response => response.json())
            .then(pokeData => {
              const div = document.createElement('div');
              const img = document.createElement('img');
              img.src = pokeData.sprites.front_default;
              const name = document.createElement('h2');
              name.textContent = pokeData.name;
              div.appendChild(img);
              div.appendChild(name);
              document.body.appendChild(div);
            });
        });
      });
  };*/
  window.onload = function() {
    const container = document.createElement('div');
    container.className = 'pokemon-container';
    document.body.appendChild(container);

    fetch('https://pokeapi.co/api/v2/pokemon/?limit=20')
        .then(response => response.json())
        .then(data => {
            data.results.forEach(pokemon => {
                fetch(pokemon.url)
                    .then(response => response.json())
                    .then(pokeData => {
                        const div = document.createElement('div');
                        div.className = 'pokemon-card';
                        const img = document.createElement('img');
                        img.src = pokeData.sprites.front_default;
                        const name = document.createElement('h2');
                        name.textContent = pokeData.name;
                        div.appendChild(img);
                        div.appendChild(name);
                        container.appendChild(div);
                    });
            });
        });
};


  
  