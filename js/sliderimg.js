let indiceActual=0;function cambiarSlide(i){let l=document.querySelectorAll(".slide");indiceActual=(indiceActual+i)%l.length,actualizarSlider()}function seleccionarSlide(i){indiceActual=i,actualizarSlider()}function actualizarSlider(){let i=-(100*indiceActual);document.querySelector(".slider").style.transform=`translateX(${i}%)`}setInterval(()=>cambiarSlide(1),8e3),actualizarSlider();

  

