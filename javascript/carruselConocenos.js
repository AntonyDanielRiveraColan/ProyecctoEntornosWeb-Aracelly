/*-------------------CARRUSEL CONOCENOS------------------*/
var imgC = new Array(
    '../imagenes/PERSONAL/IMG1.PNG',
    '../imagenes/PERSONAL/IMG2.PNG',
    '../imagenes/PERSONAL/IMG3.PNG',
    '../imagenes/PERSONAL/IMG4.PNG');
     
  var Z = 0;
  
  function carrusel2(){
    Z++;
    if(Z>imgC.length-1){
        Z=0;
    }
    document.getElementById("imgZ-section").setAttribute("src",imgC[Z]);
    
    setTimeout("carrusel2()",1000);
  }   
  
  
  
  document.body.setAttribute("onload","carrusel2()");