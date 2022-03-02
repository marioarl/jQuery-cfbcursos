$(document).on({
    click:()=>{$('#resultado').text(event.type + ": " + event.which)},
    keydown:()=>{
        $('#resultado').text(event.type + ": " + event.which)
        if(event.which == 13){
            alert('ENTER Pressionado')
        }
    }
})  