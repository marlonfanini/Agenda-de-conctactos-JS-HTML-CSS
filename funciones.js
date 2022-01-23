const guardarContacto = (db,contacto) => {
    db.setItem(contacto.id,JSON.stringify(contacto))
    window.location.href = 'http://127.0.0.1:5500/lol.html'
}

const cargarContactos = (db, parentNode) => {
    let claves = Object.keys(db)
    
    for(clave of claves) {
        let contacto = JSON.parse(db.getItem(clave))
         crearContacto(parentNode, contacto, db)
    }
}

const crearContacto = (parentNode, contacto, db) => {

    let divContacto = document.createElement('div')
    let nombreContacto = document.createElement('h3')
    let apellidocontacto = document.createElement('p')
    let numeroContacto = document.createElement('p')
    let direccionContacto = document.createElement('p')
    let iconoBorrar = document.createElement('span')

    nombreContacto.innerHTML = contacto.nombre
    apellidocontacto.innerHTML = contacto.apellido
    numeroContacto.innerHTML = contacto.numero
    direccionContacto.innerHTML = contacto.direccion
    iconoBorrar.innerHTML = 'delete_forever'

    divContacto.classList.add('tareass')
    iconoBorrar.classList.add('material-icons', 'icon')

    iconoBorrar.onclick = () => {
        db.removeItem(contacto.id)
        window.location.href = 'http://127.0.0.1:5500/lol.html'
    }

    divContacto.appendChild(nombreContacto)
    divContacto.appendChild(numeroContacto)
    divContacto.appendChild(apellidocontacto)
    divContacto.appendChild(direccionContacto)
    divContacto.appendChild(iconoBorrar)

    parentNode.appendChild(divContacto)
}