

//Pode ser feito desta maneira, pegando objeto por objeto
/*
$('#texto1').click((event)=>{
    $('#resultado').text("Objeto que foi clicado: " + event.target.nodeName)
})

$('#texto2').click((event)=>{
    $('#resultado').text("Objeto que foi clicado: " + event.target.nodeName)
})
*/

//Pode ser feito dessa maneira, com o evento de click

$(document).click((event)=>{
    $('#resultado').text("Objeto clicado: " + event.target.tagName) //Alem do tagName, pode-se colocar varias opcoes, id, nodeName...
    if (event.target.id == 'resultado'){
        alert('Resultado clicado')
    }
})
