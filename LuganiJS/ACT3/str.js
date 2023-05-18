const nombre="benjamin"
const apellido="oyarzun"
const estudiante="Benjamin Oyarzun"
const estudiantemayus= "BENJAMIN OYARZUN" 
const estudianteminus= "benjamin oyarzun"
const studentlength= estudiante.length
const firstchar= nombre.charAt(0)
const lastchar= apellido.charAt(6)
const del= estudiante.replace(/\s/g, "")
const contains= estudiante.toLowerCase().includes(nombre)

document.write("El valor de la variable nombre es: "+nombre)
document.write("<br>")
document.write("El valor de la variable apellido es: "+apellido)
document.write("<br>")
document.write("El valor de la variable estudiante es: "+estudiante)
document.write("<br>")
document.write("El valor de la variable estudiantemayus es: "+estudiantemayus)
document.write("<br>")
document.write("El valor de la variable estudianteminus es: "+estudianteminus) 
document.write("<br>")


document.write("El numero de caracteres de la variable estudiante es de : "+studentlength) 
document.write("<br>")
document.write("La primera letra de la variable nombre es: " +(firstchar))
document.write("<br>")
document.write("La ultima letra de la variable apellido es: "+(lastchar))
document.write("<br>") 
document.write("Si borro los espacios de la variable estudiante quedaria asi: "+(del))
document.write("<br>")
console.log(contains)
document.write("Dado que el valor de contains es true, me doy cuenta que nombre esta contenida en estudiante")


