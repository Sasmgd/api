let info;
await fetch('https://fakestoreapi.com/products/').then((response) => { return response.json(); }).then((json) => {

    info = json;
    console.log(json)
})
info.map((product) => {
    let card = document.createElement('div');
    card.setAttribute('class', 'card');
    // card.classList.add('card');
    document.querySelector('.container').appendChild(card);

    // Title
    let title = document.createElement('h1');
    title.innerText = product.title;
    card.appendChild(title);
    // Image
    let img = document.createElement('img');
    img.src = product.image;
    card.appendChild(img);
    img.classList.add('img')
})
let input = document.querySelector('.cars')
let data;
await fetch('https://covid-api.mmediagroup.fr/v1/cases').then((response) => { return response.json(); }).then((json) => {

    data = json;
    console.log(json)
})
for (let i in data) {
    let option = document.createElement('option');
    input.appendChild(option);
    console.log(option)
    option.value = data[i].All.country;
    option.innerText = option.value;
}
let countre = 0;
let cards = document.createElement('div');
let pop = document.createElement('p');
let capital = document.createElement('p');
input.addEventListener('change', () => {
    for (let i in data) {
        if (input.value === i) {
            if (countre == 0) {

                cards.classList.add('cards')
                document.querySelector('.result').appendChild(cards);
                pop.innerText = data[i].All.population;
                cards.appendChild(pop);
                console.log(pop);
                countre++

            } else {
                cards.remove;
                cards.classList.add('cards')
                document.querySelector('.result').appendChild(cards);
                pop.innerText = data[i].All.population;
                capital.innerHTML = data[i].All.capital_city
                cards.appendChild(capital);
                cards.appendChild(pop);
            }
        }
    }

})