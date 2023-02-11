const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#resultado")
const form = document.querySelector("#form")

form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event){
    console.log({event});
    event.preventDefault();
    const suma = Number(input1.value) + Number(input2.value);

    pResult.innerText = "Resultado " + suma;
}