let pantalla = document.getElementById('screen');


const clean_screen = () => {
    pantalla.value = '';
}

const clean_screen_one = () => {
    let operation = pantalla.value;
    operation = operation.slice(0,-1) 
    pantalla.value = operation;
}

const show = (c) => {
    pantalla.value += c;
}

const result = () => {
    pantalla.value = eval(pantalla.value);
}