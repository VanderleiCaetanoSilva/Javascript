var agora = new Date()
var horario = agora.getHours()
console.log(`Agora são ${horario}`)
if (horario < 12) {
   console.log("Bom dia !!")
}
else if (horario < 18) { 
        console.log("Boa Tarde !!")
     }     
     else {
        console.log("Boa Noite !!")
     }    