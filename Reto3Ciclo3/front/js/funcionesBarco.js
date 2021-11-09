function traerInformacionBarcos(){
    $.ajax({
        url:"http://localhost:80/api/Boat/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaBarcos(respuesta);
        }
    });
}

function pintarRespuestaBarcos(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].brand+"</td>";
        myTable+="<td>"+respuesta[i].year+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado2").html(myTable);
}
function guardarInformacionBarcos(){

    console.log();
    if($("#Bname").val() !== "" & $("#Bbrand").val() !== "" & $("#Byear").val() !== "" & $("#Bdescription").val() !== ""){
       
        let var1 = {
            name:$("#Bname").val(),
            brand:$("#Bbrand").val(),
            year:$("#Byear").val(),
            description:$("#Bdescription").val()
            };
          
            $.ajax({
            type:'POST',
            contentType: "application/json; charset=utf-8",
            dataType: 'JSON',
            data: JSON.stringify(var1),
            
            url:"http://localhost:80/api/Boat/save",
     
            success:function(response) {
                console.log(response);
            console.log("El Barco Se guardo correctamente");
            alert("El Barco \""+ $("#Bname").val() + "\" Se ha guardado Exitosamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("El Barco No se guardo correctamente");
    
    
        }
        });


    }else{

        alert("Para almacenar, Todos los campos de \"Barcos\" deben estar completamente diligenciados")
        return false
    }

    
}