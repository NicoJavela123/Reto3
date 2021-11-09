function traerInformacionCategorias(){
    $.ajax({
        url:"http://localhost:80/api/Category/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaCategoria(respuesta);
        }
    });
}

function pintarRespuestaCategoria(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado1").html(myTable);
}
function guardarInformacionCategorias(){

    if($("#Cname").val() !== "" & $("#Cdescription").val() !== ""){

        let var2 = {
            name:$("#Cname").val(),
            description:$("#Cdescription").val()
            };
          
            $.ajax({
            type:'POST',
            contentType: "application/json; charset=utf-8",
            dataType: 'JSON',
            data: JSON.stringify(var2),
            
            url:"http://localhost:80/api/Category/save",
     
            success:function(response) {
                console.log(response);
            console.log("La categoría Se guardo correctamente");
            alert("La categoría \""+ $("#Cname").val() + "\" Se ha guardado Exitosamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("La categoría No se guardo correctamente \n Intentelo nuevamente");
    
    
        }
        });

    }else{
        alert("Para almacenar, Todos los campos de \"Categorías\" deben estar completamente diligenciados")
        return false
    }

    
}