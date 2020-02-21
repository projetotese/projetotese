<script>
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
  document.getElementById('DivJogGolo').style.display = "block";
}

function showJogRemate() {
  document.getElementById('DivJogRemate').style.display = "block";
}

function showTipoGolo() {
  document.getElementById('DivTipoGolo').style.display = "block";
}

</script>