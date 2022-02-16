$('#bloco').click(()=>{
    $("#texto").text("Clicado no quadrado")
})

$('#bloco').mouseenter(()=>{
    $("#texto").text("Mouse Entrou no Quadrado")
})

$('#bloco').mouseleave(()=>{
    $("#texto").text("Mouse saiu no Quadrado")
})

$('#bloco').mousemove(()=>{
    $("#texto").text("Mouse movendo sobre o Quadrado")
})


