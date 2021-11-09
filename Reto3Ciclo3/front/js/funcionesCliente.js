function traerInformacionClientes(){
    $.ajax({
        url:"http://localhost:80/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaClientes(respuesta);
        }
    });
}

function pintarRespuestaClientes(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].email+"</td>";
        myTable+="<td>"+respuesta[i].password+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].age+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado3").html(myTable);
}
function guardarInformacionClientes(){

    console.log();
    if($("#Clemail").val() !== "" & $("#Clpassword").val() !== "" & $("#Clname").val() !== "" & $("#Clage").val() !== ""){
       
        let var3 = {
            email:$("#Clemail").val(),
            password:$("#Clpassword").val(),
            name:$("#Clname").val(),
            age:$("#CLage").val()
            };
          
            $.ajax({
            type:'POST',
            contentType: "application/json; charset=utf-8",
            dataType: 'JSON',
            data: JSON.stringify(var3),
            
            url:"http://localhost:80/api/Client/save",
     
            success:function(response) {
                console.log(response);
            console.log("El Cliente Se guardo correctamente");
            alert("El Cliente \""+ $("#Clname").val() + "\" Se ha guardado Exitosamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("El Barco No se guardo correctamente");
    
    
        }
        });


    }else{

        alert("Para almacenar, Todos los campos de \"Clientes\" deben estar completamente diligenciados")
        return false
    }

    
}