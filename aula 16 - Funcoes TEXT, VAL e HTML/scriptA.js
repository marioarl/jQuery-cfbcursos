//val()é utilizado para elementos de formulario

$('#nome').click(
    function(){
        alert("Texto: " + $(this).val())
    }
)