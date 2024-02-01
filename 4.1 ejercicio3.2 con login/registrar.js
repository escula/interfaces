
document.getElementById('formulario').addEventListener('submit',function (params) {
    params.preventDefault();
    if(escorrectoNombre() && esCorrectaContrasena()){
        window.alert("se ha enviado correctamente")
        document.getElementById('nombreUsuario').value=""
        document.getElementById('contrasenaUsuario').value=""
        document.getElementById('contrasenaConfirmar').value=""
    }

})

function estaBienNombre(nombre) {
    regx=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regx.test(nombre);
}
function escorrectoNombre(){
    const nombreUsuario=document.getElementById('nombreUsuario');

    if(estaBienNombre(nombreUsuario.value)){
        if(document.getElementById("errorNombre")){
            document.getElementById("errorNombre").remove()
        }
    }else{
        if(!document.getElementById("errorNombre")){

            let error=document.createElement('p')
            error.setAttribute("id","errorNombre")
            error.innerHTML="Esta incorrecto el nombre"
            nombreUsuario.after(error)
        }
    }
}
function esCorrectaContrasena(){
    const contra=document.getElementById("contrasenaUsuario")
    const confirmaContr=document.getElementById("contrasenaConfirmar")

    if(contra.value===confirmaContr.value){
        if(document.getElementById("errorContra")){
            document.getElementById("errorContra").remove()
        }
    }else{
        
        let error=document.createElement('p')
        error.setAttribute("id","errorContra")
        error.innerHTML="No coincide la contraseña"
        confirmaContr.after(error)
    }
}