function tocaSom (seletorAudio) {
  const elemento = document.querySelector(seletorAudio) 
  
  //if (elemento === null) {
   // alert('Elemento nao encontrado');
   // console.log('Elemento nao encontrado');
 
  if (elemento  && elemento.localName ==='audio'){
        elemento.play(); 
        }
        else {
            console.log('Elemento nao encontrado');
         }
  }

// mudança de toca som pom para so toca só 
const listaDeTeclas = document.querySelectorAll('.tecla');


// enquanto 

/*let contador = 0;
while(contador < listaDeTeclas.length) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    console.log(instrumento);
    const idAudio = `#som_${instrumento}`; // template string
 //  listaDeTeclas[contador].onclick = tocaSom;
 // adici0onando uma função anonima onde esta tocasom
    tecla.onclick = function () {
        //tocaSom("#som_tecla_pom");
        tocaSom(idAudio);
    }
    contador = contador + 1;
    console.log(contador);
}
*/
// mudando o White para For
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    console.log(instrumento);
    // template string
    const idAudio = `#som_${instrumento}`; 
    console.log(idAudio);
 //  listaDeTeclas[contador].onclick = tocaSom;
 // adici0onando uma função anonima onde esta tocasom
    tecla.onclick = function () {
        //tocaSom("#som_tecla_pom");
        tocaSom(idAudio);
    }
   // contador = contador + 1;
    console.log(contador);
    tecla.onkeydown = function(evento){
        if (evento.code === 'Space' || evento.code === 'Enter') {
        tecla.classList.add('ativa');
    }
    tecla.onkeyup = function (){

        tecla.classList.remove('ativa');
        }
    
}
}

// document.querySelector('.tecla_pom');
/* codigos repetitivos, nao funcional 
listaDeTeclas[0].onclick = tocaSomPom;
listadeTeclas[1].onclick = tocaSompuff; */

/* Exercicio tocasomclap

function  tocaSomClap() {
    document.querySelector('#som_tecla_clap').play(); }
 

 se usasse para cada elemento, o codigo ficaria extenso assim como está vamos usar uma lista e o querySelectorAll

function  tocaSomSplash() {
    document.querySelector('#som_tecla_splash').play();
}
function  tocaSomPuff() {
    document.querySelector('#som_tecla_puff').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom;
document.querySelector('.tecla_pom').onclick = tocaSomClap;
document.querySelector('.tecla_pom').onclick = tocaSomPuff;
document.querySelector('.tecla_pom').onclick = tocaSomSplash; */
