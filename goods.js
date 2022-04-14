const cart = {
    "p92779": {
        "name": "Мужские часы CASIO G-2900F-8VER",
        "url": "#",
        "image": "img/G-2900F-8VER.jpg",
        "price": 1720.00
    },
    "p93039": {
        "name": "Мужские часы CASIO AE-1000W-1AVEF",
        "url": "#",
        "image": "img/AE-1000W-1AVEF.jpg",
        "price": 2400.00
    },
    "p63553250": {
        "name": "Наручные часы Casio W-800H-1AVES",
        "url": "#",
        "image": "img/Casio W-800H-1AVES.jpg",
        "price": 1200.00
    },
    "p93127": {
        "name": "Мужские часы CASIO EF-552-1AVEF",
        "url": "#",
        "image": "img/EF-552-1A.jpg",
        "price": 9000.00
    },
};

// создание контейнера
let container = document.createElement('div');
container.classList.add('container');
document.querySelector('body').append(container);
console.log(document.querySelector('.container'));
// создание карточек с часами
for (let key in cart) {
    let elem = document.createElement('div');
    elem.classList.add('item');
    let h2 = document.createElement('h2');
    h2.innerHTML = cart[key]['name'];
    elem.append(h2);
    let img = document.createElement('img');
    img.src = cart[key]['image'];
    elem.append(img);
    let price = document.createElement('p');
    price.classList.add('price');
    price.innerHTML = cart[key]['price'] + ' RU';
    elem.append(price);
    let btn = document.createElement('button');
    btn.setAttribute('data-articul', key);
    btn.classList.add('btn');
    btn.innerHTML = 'В корзину';
    elem.append(btn);
    document.querySelector('.container').append(elem);


}

let data = {}; // товары которые попадют в корзину

document.querySelector('.container').addEventListener('click', event => {
    if (event.target.classList.contains('btn')) {
        let articul = event.target.dataset['articul'];
        if (data[articul] !== undefined) {
            data[articul]['count']++;
        } else {
            data[articul] = cart[articul];
            data[articul]['count'] = 1;
        }
        localStorage.setItem('cart', JSON.stringify(data));
    }
    console.log(data);
    let basket = document.createElement('button');
    let link = document.createElement('a');
    basket.classList.add('basket');
    link.href = 'cart.html';
    basket.innerHTML = 'To shopping cart';
    link.setAttribute('target', '_blank');
    link.append(basket);
    document.querySelector('body').append(link);
})