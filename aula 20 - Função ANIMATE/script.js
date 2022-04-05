$('#btn_aumentar').click(
    function(){
        $('#caixa').animate({width:"500px", height: "500px"}, {duration: 3000}) //Na funcao ANIMATE( { } ), dentro do primeiro conjunto de chaves, sao as propriedades que vamos alterar e o segundo conjunto de chaves sao as funcoes extras que será configurada a animacao. Neste caso as duas funcoes de aumentar serao executadas ao mesmo tempo com o tempo de duracao de 3 segundos
    }
)

$('#btn_diminuir').click(
    function(){
        $('#caixa').animate({width:"200px"}).animate({height:"200px"}) //Neste exemplo, primeiro será executada a funcao diminuir a largura e depois será executada a funcao de diminuir a altura - aninhamento de animacoes
    }
)

$('#btn_direita').click(
    function(){
        $('#caixa').animate({left:"500px"}, {duration: 1000, complete: ()=> {alert('Movimentação terminou')}})
    }
)

$('#btn_esquerda').click(
    function(){
        $('#caixa').animate({left:"0px"}, {duration: 1000, complete: ()=> {alert('Movimentação terminou')}})
    }
)