$('#bloco').on({
    click:()=>{$("#texto").text("Clique no quadrado")},
    mouseenter:()=>{$("#texto").text("Mouse entrou no quadrado")},
    mouseleave:()=>{$("#texto").text("Mouse saiu do quadrado")},
    dblclick:()=>{$("#texto").text("Clique duplo no quadrado")}

})

$('#bloco2').click(()=>{
    $('#bloco').trigger('click')
})





