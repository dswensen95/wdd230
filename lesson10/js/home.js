const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
      const towns = jsonObject['towns'];
      for (let i = 0; i < towns.length; i++ ){
          if (i == 0 || i == 2 || i == 6)
          {
              let div = document.createElement('div');
         

        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let p2 = document.createElement('p');
        let h3 = document.createElement('h3');
        let image = document.createElement('img');
        h2.textContent = jsonObject.towns[i].name;
        h3.textContent = jsonObject.towns[i].motto;
        p.textContent = 'Year Founded: ' + jsonObject.towns[i].yearFounded;
        p2.textContent = 'Current Population: ' + jsonObject.towns[i].currentPopulation;
        
        card.appendChild(h2);
        card.appendChild(h3);
        card.appendChild(p);
        card.appendChild(p2);
        card.appendChild(image);
        
        document.querySelector('div.cards').appendChild(card);

        image.setAttribute('src', 'images/' + jsonObject.towns[i].photo);
          }

      }


  });