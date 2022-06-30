
var update;

function horaAtual(){
                
    var data = new Date;
    var hora;
    var minuto;
    var segundo;
    var horaCompleta;
    

    hora=data.getHours();
    minuto=data.getMinutes();
    segundo=data.getSeconds();
   
    if(hora<10){
        hora="0"+hora;
    }
    if(minuto<10){
        minuto="0"+minuto;
    }
    if(segundo<10){
        segundo="0"+segundo;
    }

    horaCompleta=hora + " : " + minuto + " : " + segundo;
    
    document.getElementById("Digital_Hours").innerHTML=horaCompleta;
}


update=setInterval(horaAtual,1000);

