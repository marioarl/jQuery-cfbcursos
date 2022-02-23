let pmx = 0
let pmy = 0
$(document).mousemove((event)=>{
    pmx=event.pageX
    pmy=event.pageY
    if(pmx > 700)
        console.log("Pos X > que 700px")
    $('#texto').text("Mouse X: " + pmx + "px , Mouse Y: " + pmy + "px")
})