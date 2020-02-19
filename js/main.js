window.onload = () => {
   'use strict';
 
   if ('serviceWorker' in navigator) {
     navigator.serviceWorker
              .register('./sw.js');
   }
 }
 
 // Script to open and close sidebar
 function w3_open() {
   document.getElementById("mySidebar").style.display = "block";
 }
  
 function w3_close() {
   document.getElementById("mySidebar").style.display = "none";
 }


 function disable(btn){
   document.getElementById(btn.id).disabled = true;
}

function color(btn){
document.getElementById(btn.id).style.color = "#ff0000";
}
 //botões eventos
function changegolo(){
document.getElementById("golo").src="./images/goloch.png"; 
}

function changefaltaefetuada(){
document.getElementById("faltaefetuada").src="./images/bolaiconch.png";
}

function changefaltasofrida(){
   document.getElementById("faltasofrida").src="./images/faltach.png";
   }

function changeperdabola(){
document.getElementById("perdabola").src="./images/bolaiconch.png"; 
}

function changeremate(){
document.getElementById("remate").src="./images/rematech.png";
}
function changesubstituicao(){
document.getElementById("substituicao").src="./images/substituicaoch.png";
}
function changesancao(){
document.getElementById("sancao").src="./images/cartoesch.png";
}
 
 
 function showJogGolo() {
   //document.getElementById("carderemate").disabled = true;
   //document.getElementById('imagemremate').setAttribute('disabled',true);
   //document.getElementById('imagemremate').setAttribute('disabled', 'disabled');
   //disabled = true;
   //document.getElementById('teste').disabled=true;
   //document.getElementById('teste').disabled = true;
   //document.getElementById('imagemremate').disabled = true;
  // document.getElementById('cardremate').style.display = "block";
   // document.getElementById('imagemremate').src="E:/5 Ano Universidade/Dissertação/Desenvolvimento plataforma/Bootstrap/img/remate.png";
    //document.getElementById('imagemremate').style.display="block";
    document.getElementById('DivJogGolo').style.display = "block";
    
 }
 
 function showJogRemate() {
    document.getElementById('DivJogRemate').style.display = "block";
 }
 
 function showJogFalta() {
    document.getElementById('DivJogFalta').style.display = "block";
 }
 
 function showJogPerdaBola() {
    document.getElementById('DivJogPerdaBola').style.display = "block";
 }
 
 function showJogSubs() {
    document.getElementById('DivJogSubs').style.display = "block";
 }
 
 //Mostrar zonaCampo
 function showJogEntraSubs() {
    document.getElementById('DivJogEntraSubs').style.display = "block";
 }
 
 //Mostrar zonaCampo
 function showJogSancao() {
    document.getElementById('DivJogSancao').style.display = "block";
 
 //Mostrar zonaCampo
 function showCampoGolo() {
    document.getElementById('DivCampoGolo').style.display = "block";
 }
 //Mostrar zonaCampo
 function showCampoRemate() {
    document.getElementById('DivCampoRemate').style.display = "block";
 }
 
 function showCampoFalta() {
    document.getElementById('DivCampoFalta').style.display = "block";
 }
 
 function showCampoPerda() {
    document.getElementById('DivCampoPerdaBola').style.display = "block";
 }
 
 function disable(btn){
         document.getElementById(btn.id).disabled = true;
 }
 
 function disable(img){
    document.getElementById(img.id).disabled= true;
 }
 
 function color(btn){
 document.getElementById(btn.id).style.color = "#ff0000";
 }
 
 
 function showJogAssistGolo() {
    document.getElementById('DivJogAssistenciaGolo').style.display = "block";
 }
 
 //Mostrar Comentario
 function showComentario() {
    document.getElementById('DivComentario').style.display = "block";
 }
 //Mostrar TipoGolo
 function showtipoGolo() {
    document.getElementById('DivtipoGolo').style.display = "block";
 }
 //Mostrar tipoRemate
 function showtipoRemate() {
    document.getElementById('DivtipoRemate').style.display = "block";
 }
 //Mostrar TipoPerdaBola
 function showtipoPerda() {
    document.getElementById('DivtipoPerda').style.display = "block";
 }
 
 //Mostrar Sancao
 function showtipoSancao() {
    document.getElementById('Divtiposancao').style.display = "block";
 }
 
 //Mostrar Fim
 function showFimCriacao() {
    document.getElementById('DivFimCriacao').style.display = "block";
 }
 
 //Após Carregar Proximo Evento
 function showEventoCriado() {
   alert("Evento Criado");
 }