function traerInformacionMensajes(){
    $.ajax({
        url:"http://localhost:80/api/Message/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestamensaje(respuesta);
        }
    });
}

function pintarRespuestamensaje(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].messageText+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado4").html(myTable);
}
function guardarInformacionMensajes(){

    if($("#MmessageText").val() !== ""){

        let var4 = {
            messageText:$("#MmessageText").val(),
            };
          
            $.ajax({
            type:'POST',
            contentType: "application/json; charset=utf-8",
            dataType: 'JSON',
            data: JSON.stringify(var4),
            
            url:"http://localhost:80/api/Message/save",
     
            success:function(response) {
                console.log(response);
            console.log("El Nebsaje Se guardo correctamente");
            alert("El mensaje \""+ $("#MmessageText").val() + "\" Se ha guardado Exitosamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("El mensaje No se guardo correctamente \n Intentelo nuevamente");
    
    
        }
        });

    }else{
        alert("Para almacenar, Todos los campos de \"Mensajes\" deben estar completamente diligenciados")
        return false
    }

    
}