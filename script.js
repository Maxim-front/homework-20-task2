const products = [
    "Молоко",
    "Орехи",
    "Кофе",
    "Сахар",
    "Хлеб",
    "Йогурт",
    "Сок",
    "Бананы",
    "Мандарины",
    "Шоколад",
    "Печенье",
];

class Search {

    constructor(selector) {
        this.element = document.querySelector(selector)
        this.handleInput = this.handleInput.bind(this);
        this.handleInput()
        this.element.addEventListener('input', this.handleInput)
    }

    handleInput() {
        let str = this.element.value
        result.createList(str)
    }
}


class Results {

    constructor(array, selector) {
        this.array = array
        this.wrapperElement = document.querySelector(".wrapper")
        this.element = document.querySelector(selector)
    }

    createList(str) {
        this.element.innerHTML = ''
        let resultArray = []

        for (this.item of this.array) {
            if (this.item.indexOf(str) !== -1) {
                resultArray.push(this.item)
            }
        }

        for (this.item of resultArray) {
            this.element.innerHTML += `<li>${this.item}</li>`
        }
        this.wrapperElement.append(this.element)
    }

}

const result = new Results(products, '#result')
const search = new Search("#search")