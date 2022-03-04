//Este evento será propagado para o p e para o span
$("div").click(()=>{alert('Evento disparado no DIV')})

//Parando a propagacao do evento
$("p").click((event)=>{event.stopPropagation();alert('Evento disparado no P')})
$("span").click((event)=>{event.stopPropagation();alert('Evento disparado no SPAN')})
