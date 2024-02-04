
document.getElementById('formulario').addEventListener('submit',function (params) {
    params.preventDefault();

        if(esCorrectaContrasena()){ //Los pongo separados porque al ponerlos en un if con && no fun
       const nombreUsuario=document.getElementById('nombreUsuario')
       const contra=document.getElementById('contrasenaUsuario')
       const contraRep=document.getElementById('contrasenaConfirmar')
       const nomPersona=document.getElementById('nombrePersona')
       const sexo=document.getElementById('sexo')
       const foto=document.getElementById('foto')
       const fechaNacimiento=document.getElementById('fechaNacimiento')
       const aficionesEintereses=document.getElementById('aficionesEintereses')
       const comentario=document.getElementById('comentario')

            window.alert(
                "Nombre Usuario="+nombreUsuario.value
                +"\ncontraseña="
                +contra.value+"\nNombre persona="
                +nomPersona.value+"\nsexo="
                +sexo.value+"\n foto perfil="
                +foto.value+"\nfecha nacimiento="
                +fechaNacimiento.value
                +"\n Aficiones e intereses="+aficionesEintereses.value
                +"\n Comentario="+comentario.value
            )

            nombreUsuario.value=""
            document.getElementById('contrasenaUsuario').value=""
            contra.value=""
            contraRep.value=""
            nomPersona.value=""
            sexo.value="Mujer"
            foto.value=""
            fechaNacimiento.value=""
            aficionesEintereses.value=""
            comentario.value=""
        }
    return NoContent();
    

})

function esCorrectaContrasena(){
    let resultado=false;
    const contra=document.getElementById("contrasenaUsuario")
    const confirmaContr=document.getElementById("contrasenaConfirmar")

    if(contra.value===confirmaContr.value){
        if(document.getElementById("errorContra")){
            document.getElementById("errorContra").remove()
        }
        resultado= true
    }else{
        if(!document.getElementById("errorContra")){
            let error=document.createElement('p')
            error.setAttribute("id","errorContra")
            error.innerHTML="No coincide la contraseña"
            confirmaContr.after(error)
            resultado= false
        }
    }
    return resultado;
}