

  const seccion3 = document.querySelector('.seccion3'); //En esta línea guardamos el div con seccion3
  
  const form = document.getElementById('formulario'); //En esta línea guardamos el formulario
    
  form.addEventListener('submit',function(e){
    e.preventDefault();
    let nombre = document.getElementById('first_name').value;
    let apellido = document.getElementById('last_name').value;
    let correo = document.getElementById('email').value;
    

    let checkBox1 = document.getElementById('checkbox1');
    let checkBox2 = document.getElementById('checkbox2');

    if(checkBox1.checked == true && checkBox2.checked == true){
      console.log('aceptó los terminos y condiciones');
      agregarTexto(nombre,apellido,correo);
    }
    else{
      alert('Acepta los terminos y condiciones');
    }
});



  
  function agregarTexto(nombre,apellido,correo){
    let html = `
    <div class="col s4 m3">
      <div class="card ">
        <div class="card-image">
          <img src="https://picsum.photos/200">
          <span class="card-title">Hola ${nombre} ${apellido}</span>
        </div>
        <div class="card-content">
          <p>Tu registro fue exitoso con el correo ${correo}.</p>
        </div>
        <div class="card-action">
          <a href="#">Ingresa al siguiente link</a>
        </div>
      </div>
    </div>`;
    seccion3.innerHTML += html;            
  }



  /*EVENTO CHANGE
  const casilla1 = document.getElementById('checkbox1');
  const casilla2 = document.getElementById('checkbox2');
  
  casilla1.addEventListener('change',function(e){
   console.log(e);
  });
*/
  
        
    /*  EVENTO SUBMIT
    const form = document.getElementById('formulario');
    
    form.addEventListener('submit',function(e){
      e.preventDefault();
      let nombre = document.getElementById('first_name').value;
      let apellido = document.getElementById('last_name').value;
      console.log(nombre);
      console.log(apellido);
    });
    
    */
    
    /* EVENTO KEYDOWN
    input.addEventListener('keydown',function(e){
      if(e.key == '@'){
        alert('No se aceptan carecteres especiales');
      }
    });
    /*
    
    /* DELAY
    setTimeout(function(p1,p2,p3){
      console.log('p1');
      console.log('p2');
      console.log('p3');
    },5000,'Hola(p1)','Soy(p2)','Atributos(p3)');
    */
    
    const boton1 = document.querySelector('.btn1');
    const boton2 = document.querySelector('.btn2');
    const boton3 = document.querySelector('.btn3');
    const boton4 = document.querySelector('.btn4');
    
    const magia = document.querySelector('.Colapso'); //botón para ocultar
    
    magia.addEventListener('click',function(){
      
      if(boton1.style.display != 'none'){
        magia.textContent = 'Mostrar';
        boton1.style.display = 'none';
        boton2.style.display = 'none';
        boton3.style.display = 'none';
        boton4.style.display = 'none';
      }
      else{
        magia.textContent = 'Ocultar';
        boton1.style.display = 'block';
        boton2.style.display = 'block';
        boton3.style.display = 'block';
        boton4.style.display = 'block';
      }
    });
    
    
    //SEGUNDA FORMA DE CAMBIAR EL FONFO
    const fondo = document.querySelector('body');
    
    const Color1 = document.querySelector('.btn1');
    const Color2 = document.querySelector('.btn2');
    const Color3 = document.querySelector('.btn3');
    const Color4 = document.querySelector('.btn4');

    
    Color1.addEventListener('click',function(){
      fondo.style.backgroundColor = '#700440';
    });
    Color2.addEventListener('click',function(){
      fondo.style.backgroundColor = '#9f4aa3';
    });
    Color3.addEventListener('click',function(){
      fondo.style.backgroundColor = '#c1aed5';
    });
     Color4.addEventListener('click',function(){
      fondo.style.backgroundColor = '#3c2c64';
    });
    
    
    /*  PRIMER FORMA DE CAMBIAR EL FONDO
    const fondo = document.querySelector('body');
    
    function Color1() { fondo.style.backgroundColor = '#700440';}
    
    function Color2() { fondo.style.backgroundColor = '#9f4aa3'; }
    
    function Color3() { fondo.style.backgroundColor = '#c1aed5'; }
    
    function Color4() { fondo.style.backgroundColor = '#3c2c64'; }
    */

    
function myFunction() {
  var checkBox = document.getElementById("checkbox2");
  var text = document.getElementById("text");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
   console.log('aceptó los terminos y condiciones');
  } else {
    alert('Acepta los terminos y condiciones');
  }
} 
    
    