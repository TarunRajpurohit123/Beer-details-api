
//fetch apis from another source
fetch('https://api.punkapi.com/v2/beers/random').then(data => data.json())
.then((real) => {

  // we get api in array of object form
  real.forEach(element => {
    const array = element;
    const beerName = element.name;
    const tagLine = element.tagline;
    const image = element.image_url;
    const desc = element.description;
    const contributer = element.contributed_by;
    const brewer_tip = element.brewers_tips;

    const imgElement = document.getElementById('img');
    const imgElement2 = document.getElementById('img2');
    const imgElement3 = document.getElementById('img3');
    imgElement.setAttribute('src',image);
    imgElement2.setAttribute('src',image);
    imgElement3.setAttribute('src',image);
    const tagElement = document.getElementById('tagElement');
    tagElement.innerHTML = tagLine;
    const nameElement = document.getElementById('name');
    nameElement.innerHTML = beerName;
    const descElement = document.getElementById('descElement');
    descElement.innerHTML = desc;
    const brewElement = document.getElementById('brewElement');
    brewElement.innerHTML = brewer_tip;
    const conElement = document.getElementById('conElement');
    conElement.innerHTML = contributer;

  });
})
