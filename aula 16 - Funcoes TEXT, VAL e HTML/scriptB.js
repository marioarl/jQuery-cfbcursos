//html() retorna o conteudo HTML (codigo)de onde indicar

$('#caixa').click(
    function(){
        alert("Texto: " + $(this).html())
    }
)