const logo = document.querySelector("#logo");

logo.addEventListener("mouseover", () => {
  logo.classList.add("animate");
});

logo.addEventListener("mouseout", () => {
  logo.classList.remove("animate");
});

/*-------------------CARRUSEL INDEX------------------*/
var imgs = new Array(
    '../imagenes/banner/IMG1.JPG',
    '../imagenes/banner/IMG2.JPG',
    '../imagenes/banner/IMG3.JPG',
    '../imagenes/banner/IMG4.JPG',
    '../imagenes/banner/IMG5.JPG');
     
var c = 0;

function carrusel(){
    c++;
    if(c>imgs.length-1){
        c=0;
    }
    document.getElementById("img1-section-index").setAttribute("src",imgs[c]);
    
    setTimeout("carrusel()",1000);
}   

document.body.setAttribute("onload","carrusel()");

/*pag. cumpleaños*/

function parpadear(){

  let r = Math.floor(Math.random()*256);
  let g = Math.floor(Math.random()*256);
  let b = Math.floor(Math.random()*256);

  document.getElementById('h1-section-cumpleaños').style.color='rgb('+r+','+g+','+b+')';
  console.log('r='+r+',g='+g,',b='+b) 
  setTimeout('parpadear()',1000);
}

parpadear();

function fade(){ 
  document.getElementById('img-section-cumpleaños').style.opacity = 0;  
  document.getElementById('img-section-cumpleaños').style.transition = 'all 1s';
  setTimeout('fadeOut()',2000);
}
fade();

function fadeOut(){ 
  document.getElementById('img-section-cumpleaños').style.opacity = 1;  
  document.getElementById('img-section-cumpleaños').style.transition = 'all 1s';
  setTimeout('fade()',2000);
}
