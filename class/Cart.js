class Cart {
    constructor(
        items, // массив данных который приходит
        cartClass = 'cart',
        plusClass = 'plus',
        minusClass = 'minus',
        deleteClass = 'delete',
        currency = 'RU',
    ) {
        this.items = items;
        this.cartClass = cartClass;
        this.plusClass = plusClass;
        this.minusClass = minusClass;
        this.deleteClass = deleteClass;
        this.currency = currency;
    }


    goodsPlus(art) {
        this.items[art].count++;
    }
    goodsMinus(art) {
        if (this.items[art].count - 1 == 0) {
            this.goodsDelete(art);
        } else {
            this.items[art].count--;
        }

    }
    goodsDelete(art) {
        delete this.items[art];
    }
    getTotal() {
        // let total = 0;
        // for (let key in this.items) {
        //     total += this.items[key]['count'] * this.items[key]['price'];
        // }
        // return total;
        let total = 0;
        for (let key in this.items) {
            total += this.items[key]['count'] * this.items[key]['price'];
        }
        return total;
    }

    render() {
        // console.log(this.items);
        // create table
        let table = document.createElement('table');
        table.classList.add(this.cartClass);
        for (let key in this.items) {
            let goods = this.items[key];
            console.log(goods);
            let tr = document.createElement('tr');
            // делаем кнопку удалить 
            let td = document.createElement('td');
            let button = document.createElement('button');
            button.classList.add(this.deleteClass);
            button.innerHTML = 'delete';
            button.setAttribute('data-articul', key);
            td.append(button);
            tr.append(td);
            // делаем картинку
            td = document.createElement('td');
            let img = document.createElement('img');
            img.classList.add('small-img');
            img.src = goods.image;
            td.append(img);
            tr.append(td);
            // делаем заголовок
            td = document.createElement('td');
            let h4 = document.createElement('h4');
            h4.innerHTML = goods.name;
            td.append(h4);
            tr.append(td);
            // делаем минус
            td = document.createElement('td');
            button = document.createElement('button');
            button.classList.add(this.minusClass);
            button.innerHTML = 'minus';
            button.setAttribute('data-articul', key);
            td.append(button);
            tr.append(td);
            // делаем количество 
            td = document.createElement('td');
            let span = document.createElement('span');
            span.innerHTML = goods.count;
            td.append(span);
            tr.append(td);
            // делаем плюс
            td = document.createElement('td');
            button = document.createElement('button');
            button.classList.add(this.plusClass);
            button.innerHTML = 'plus';
            button.setAttribute('data-articul', key);
            td.append(button);
            tr.append(td);
            // делаем количество определенного товара
            td = document.createElement('td');
            span = document.createElement('span');
            span.innerHTML = goods.count * goods.price + ' ' + this.currency;
            td.append(span);
            tr.append(td);
            table.append(tr);
        }
        // create full total 
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        td.setAttribute('colspan', 7);
        td.style.textAlign = 'right';
        td.innerHTML = '<span class = "total" >Total: </span>' + this.getTotal() + ' ' + this.currency;
        tr.append(td);
        table.append(tr);
        return table;

    }

};