function cambio(e) {
  var img = e.getAttribute("data-social");
  e.src="../imagenes/ICONOS/" + img + "2.png";
}

function regresa(e) {
  var img = e.getAttribute("data-social");
  e.src="../imagenes/ICONOS/" + img + ".png";
}

////establece a las imagenes con class social
for (var i=0; i<document.getElementsByClassName("rs").length; i++){
  document.getElementsByClassName("rs")[i].setAttribute("onmouseover","cambio(this)");
  document.getElementsByClassName("rs")[i].setAttribute("onmouseout","regresa(this)");
}

/*MENU*/

function textoResaltado(e){
 
  var nombre = e.getAttribute("mn-name");
  document.getElementById(nombre).className = 'colocaCursor';
}

function textoNormal(e){

  var nombre = e.getAttribute("mn-name");
  document.getElementById(nombre).className = 'retiraCursor';
}

function fondoColor(e){

  var nombre = e.getAttribute("mn-name");
  document.getElementById(nombre).className = 'fondoColor';
}

for (var i=0; i<document.getElementsByClassName("menu").length; i++){
  document.getElementsByClassName("menu")[i].setAttribute("onmouseover","textoResaltado(this)");
  document.getElementsByClassName("menu")[i].setAttribute("onmouseout","textoNormal(this)");
  document.getElementsByClassName("menu")[i].setAttribute("onclick","fondoColor(this)");
}
