//***************************** declairation of variables ************************************

const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

//************************Adding OnClick Event and checking condition ******************************

buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        if (button.id === "grey") {
            body.style.backgroundColor = button.id;
        }
        if (button.id === "yellow") {
            body.style.backgroundColor = button.id;
        }
        if (button.id === "dodgerblue") {
            body.style.backgroundColor = button.id;
        }
        if (button.id === "pink") {
            body.style.backgroundColor = button.id;
        }
        if (button.id === "aqua") {
            body.style.backgroundColor = button.id;
        }
        if (button.id === "tomato") {
            body.style.backgroundColor = button.id;
        }
        if (button.id === "violet") {
            body.style.backgroundColor = button.id;
        }
    })
})