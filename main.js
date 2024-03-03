const inputs = document.querySelectorAll("input");
const button = document.querySelector(".verify");

 window.addEventListener("load", ()=>{
    const firstInput = inputs[0];
    firstInput.focus();
 });

 inputs.forEach((input, index1) => {
    input.addEventListener('keyup', (event) => {
        const currentInput = input;
        const nextInput = currentInput.nextElementSibling;
        const previousInput = currentInput.previousElementSibling;

        if(currentInput.value.length > 1) {
            currentInput.value = "";
            return;
        }

        if (currentInput.value !== "" && nextInput && nextInput.hasAttribute('disabled')) {
            nextInput.removeAttribute('disabled');
            nextInput.focus();
        }

        if(event.key === 'Backspace'){
            inputs.forEach((input, index2) =>{
                if ((index1 <= index2) && previousInput !== null) {
                    currentInput.value = "";
                    input.setAttribute('disabled', true);
                    previousInput.focus();
                    return;
                }
            })
        }

        if(!inputs[3].hasAttribute("disabled") && inputs[3].value !== ""){
            button.classList.add('active');
            return;
        }
        button.classList.remove('active');
    })
 });