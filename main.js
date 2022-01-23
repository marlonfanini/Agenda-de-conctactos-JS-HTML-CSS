const Nombre = document.querySelector('.Nombre')
const numero = document.querySelector('.numero')
const direccion = document.querySelector('.direccion')
const btnagregartarea = document.querySelector('.btn-agregar-tarea')
const listadotareas = document.querySelector('.listado-detareas');
const apellido = document.querySelector('.Apellido')
const db = window.localStorage


btnagregartarea.onclick = () => {
    let contacto = {
        id: Math.random(1,100),
        apellido: apellido.value,
        nombre: Nombre.value,
        numero: numero.value,
        direccion: direccion.value,
    }
    guardarContacto(db, contacto)
}

cargarContactos(db, listadotareas)