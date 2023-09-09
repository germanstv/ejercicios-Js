const contactos = [];

function agregarContactos (nombre, numero, email) {
    const contacto = {
        nombre: nombre,
        numero: numero,
        email: email
    };
    contactos.push(contacto)
};

function mostrarContactos(){
    for (let i = 0; i < contactos.length; i++) {
        const contacto = contactos[i];
        console.log(contacto)
    };
};

function buscarContacto(nombre){
    for (let i = 0; i < contactos.length; i++) {
        const contacto = contactos[i];
        if (contacto.nombre.toLowerCase() === nombre.toLowerCase()) {
            return contacto
        };
    } return 'Este contacto no está en tu lista'
};

function eliminarContacto(nombre) {
    for (let i = 0; i < contactos.length; i++) {
        const contacto = contactos[i];
        if (contacto.nombre.toLowerCase() === nombre.toLowerCase()){
            contactos.splice(i, 1)
            return 'se elimino correctamente el contacto'
        }
    }
    return 'este contacto no está en tu lista'
}


agregarContactos('Victor', 3012857678, 'Vic@gmail.com')
agregarContactos('Cristian', 3025445678, 'Elcris@gmail.com')
agregarContactos('Einer', 3012343765, 'Einercoach@gmail.com')
agregarContactos('Pedro', 3014657839, 'Pedropablo@gmail.com')
agregarContactos('Daniel', 3010586764, 'Dan-iel@gmail.com')
agregarContactos('Gulfran', 3012637851, 'Gulfran@gmail.com')
agregarContactos('German', 3045908765, 'germanstv@gmail.com')
