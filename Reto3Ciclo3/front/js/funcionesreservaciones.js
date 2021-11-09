function traerInformacionReservaciones(){
    $.ajax({
        url:"http://localhost:80/api/Reservation/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestareservaciones(respuesta);
        }
    });
}

function pintarRespuestareservaciones(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].startDate+"</td>";
        myTable+="<td>"+respuesta[i].devolutionDate+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado5").html(myTable);
}
function guardarInformacionReservaciones(){

    if($("#RstartDate").val() !== "" & $("#RdevolutionDate").val() !== ""){

        let var5 = {
            startDate:$("#RstartDate").val(),
            devolutionDate:$("#RdevolutionDate").val()
            };
          
            $.ajax({
            type:'POST',
            contentType: "application/json; charset=utf-8",
            dataType: 'JSON',
            data: JSON.stringify(var5),
            
            url:"http://localhost:80/api/Reservation/save",
     
            success:function(response) {
                console.log(response);
            console.log("La Reservacion Se guardo correctamente");
            alert("La Reservacion para el dia \""+ $("#RstartDate").val() + "\" Se ha guardado Exitosamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("La categoría No se guardo correctamente \n Intentelo nuevamente");
    
    
        }
        });

    }else{
        alert("Para almacenar, Todos los campos de \"Reservaciones\" deben estar completamente diligenciados")
        return false
    }

    
}