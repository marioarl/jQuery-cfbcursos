//find

$('div').find('ul').css({'border':'1px solid #f00'})//Aplicada uma borda vermelha nos elementos que está apontado no find() , que é a <ul>
$('div').find('li').css({'border':'1px solid #0f0'})//Aplicada uma borda verde nos elementos que está apontado no find() , que é a <li>

//Se houver mais de uma <tag> dentro e quisermos pegar somente a primeira tag <li>
$('div').find('ul:first').css({'border':'1px solid #00f'})//Aplicada uma borda azul somente na primeira tag <li>, se quisermos pegar a ultima tag <li> devemos colocar no find() 'ul:last'. E tambem podemos pegar todos os elementos FILHOS que estao dentro da <div>, colocando no find() '*' 


