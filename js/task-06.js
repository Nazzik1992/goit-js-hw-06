const inputEl = document.getElementById("validation-input");

inputEl.addEventListener("blur", validInput);

function validInput (event){
if (event.currentTarget.value.length !== Number(inputEl.dataset.length)) 
{
    inputEl.classList.add('invalid');
}
if (event.currentTarget.value.length === Number(inputEl.dataset.length)){
    inputEl.classList.replace('invalid', 'valid');
}
};