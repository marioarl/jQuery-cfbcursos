//prevUntil(), todos os elementos que estão acima do elemento que estamos apontando, ou seja, os elementos anteriores até o elemento apontado

$('h1').prevUntil('h3').css({'border':'1px solid #f00'})//Aplicada uma borda vermelha nos elementos anteriores que estão no mesmo nivel do <h1> (exceto <h1>) até o <h3> (exceto <h3), que são o <p> <h2> <p>.

