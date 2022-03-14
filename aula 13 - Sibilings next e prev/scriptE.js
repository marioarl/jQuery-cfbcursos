//nextUntil(), todos os elementos que estão abaixo do elemento que estamos apontando, ou seja, os elementos posteriores até o elemento apontado no nextUntil()

$('h3').nextUntil('span').css({'border':'1px solid #f00'})//Aplicada uma borda vermelha nos elementos posteriores que estão no mesmo nivel do <h3> (exceto <h3>) até o <span> (exceto <span>), que são o <p> <h2> <p>.

