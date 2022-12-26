const inputEL = document.getElementById("name-input");
const outputEl = document.getElementById("name-output");

inputEL.addEventListener("input", (event) => {
    if (event.currentTarget.value === ``) {
        return outputEl.textContent = `Anonymous`;
    }
    else
    return outputEl.textContent = event.currentTarget.value
  });

