//Codigo com JS
let btn_somarjs = document.getElementById("btn_somarjs").addEventListener("click", ()=>{
    let v1 = document.getElementById("v1").value
    let v2 = document.getElementById("v2").value
    soma = parseInt(v1) + parseInt(v2) //Converter texto em numeros INT
    let res = document.getElementById("res").value=soma
})

//Codigo com jQuery

$("#btn_somarjq").click(()=>{ //Apontando o elemento
    let v1 = parseInt($("#v1").val()) //Convertendo texto em numeros INT na v1
    let v2 = parseInt($("#v2").val())
    let soma = v1+v2
    $("#res").val(soma)  

})

//No JS é necessário selecionar o item e colocar na variavel, No jQuery apontamos para o item que precisamos trabalhar