const counter = {
    value: 0,
    increment(){
        this.value += 1;
    },
    decrement (){
        this.value -= 1;
    },

};

const counterEl = document.getElementById("counter");

const plusBtn = document.querySelector('button[data-action="increment"]');

const minusBtn = document.querySelector('button[data-action="decrement"]');

const valueEl = document.getElementById("value");

plusBtn.addEventListener("click", handleClickPlus);

function handleClickPlus () {
    counter.increment();
    valueEl.textContent = counter.value;
};

minusBtn.addEventListener("click", handleClickMinus);

function handleClickMinus() {
    counter.decrement();
    valueEl.textContent = counter.value;
};