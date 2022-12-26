const inputEl = document.getElementById("validation-input");

inputEl.addEventListener("blur", validInput);

function validInput (event){
if (event.currentTarget.value.length === Number(inputEl.dataset.length)) 
{
    inputEl.classList.add('valid');
}
if (event.currentTarget.value.length !== Number(inputEl.dataset.length)){
    inputEl.classList.replace('valid', 'invalid');
}
};