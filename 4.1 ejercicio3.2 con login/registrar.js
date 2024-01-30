
document.getElementsByTagName('button')[0].addEventListener('submit',function (params) {
    params.preventDefault();
    const nombreUsuario=document.getElementById('nombreUsuario').value;
    const contrasenaUsuario=document.getElementById('contrasenaUsuario').value;
    const contrasenaConfirmar=document.getElementById('contrasenaConfirmar').value;

    
})

function estaBienNombre(nombre) {
    regx=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regx.test(nombre);
}