function nocarga(){
    var nombre = document.getElementById("nombre");
    var username = nombre.value;
    alert("hola" + username + "!!!");

}
function crearcomentario(texto,texto2){
    element = document.getElementById('submit');
    element.style.setProperty("color", "");
    element.classList.remove("submit2");
if(texto.length>=1 && texto2.length>=1){

element.classList.remove("submit");
a1= " mensaje enviado " + texto;
document.getElementById("capa").innerHTML=a1;
element.classList.add("submit");
element.style.setProperty("color", "green");



}else{
    if(texto.length<1){
   
    element.classList.remove("submit");
    a1= "no introdujo nombre";
    document.getElementById("cuenta").innerHTML=a1;
    element.classList.add("submit");
    
    
    }else{
    
    element.classList.remove("submit");
    a1= "no introdujo numero";
    document.getElementById("capa").innerHTML=a1;
    element.classList.add("submit2");
    }
}

}

console.log('Bienvenido a alpinas de cerro');

