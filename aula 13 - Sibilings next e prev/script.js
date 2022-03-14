//siblings, sao os elementos que estao no mesmo nivel, á esquerda (todos os elementos que estao antes) e á direita (todos os elementos que estao depois)

$('h3').siblings().css({'border':'1px solid #f00'})//Aplicada uma borda vermelha nos elementos que estao no mesmo nivel do <h3> (exceto <h3>), que sao <p>, <h2> e <p>

$('h3').siblings('p').css({'border':'1px solid #0f0'})//Apontar para um elemento especifico nos irmaos.Aplicada uma borda verde nos elementos <p> que estao no mesmo nivel do <h3> (exceto <h3>).
