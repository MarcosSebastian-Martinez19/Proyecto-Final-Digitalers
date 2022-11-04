let listaPersonas = []

document.querySelector('#submitLogin').addEventListener("click", registrar, mostrarDatos);

function registrar() {
    let usuarios = [];
    let email = '';
    let password = '';

    email = document.querySelector('#emailLogin').value;
    password = document.querySelector('#passwordLogin').value;

    usuarios.push(email, password);
    registrarPersonaEnSistema(usuarios);
    mostrarDatos()
};

function mostrarDatos() {
    let personas = getListasPersonas();
    let tbody = document.querySelector('#mostrar div');

    tbody.innerHTML = '';

    for (let i = 0; i < 1; i++) {
        let fila = document.createElement('div')
        fila.classList.add('.login-div')
        let celdaEmail = document.createElement('p')
        // let celdaPassword = document.createElement('p')
        // let loguito = document.createElement('p')
        celdaEmail.innerHTML = "Hola " + personas[i][0]
        // celdaPassword.innerHTML = personas[i][1]
        // loguito.innerHTML = ``

        fila.appendChild(celdaEmail)
        // fila.appendChild(celdaPassword)
        // fila.appendChild(loguito)

        tbody.appendChild(fila)
    }

    let loginBody = document.querySelector('#login')
    let navbarMainNone = document.querySelector('.navbarMainNone')
    let navbarLeft = document.querySelector('.navbar-left ul')
    let contenedorPortada = document.querySelector('#portada')
    let contenedorPrincipal = document.querySelector('#principal')

    loginBody.classList.remove('login_body')
    loginBody.classList.add('login_body-None')
    navbarMainNone.classList.remove('navbarMainNone')
    navbarLeft.classList.remove('navbarNone')
    navbarLeft.classList.add('navbar')
    contenedorPrincipal.classList.remove('contenedor-principalNone')
    contenedorPrincipal.classList.add('contenedor-principal')
    contenedorPortada.classList.remove('contenedor-portadaNone')
    contenedorPortada.classList.add('contenedor-portada')
}


function registrarPersonaEnSistema(pNuevoUsuario) {

    let listaPersonas = getListasPersonas();
    listaPersonas.push(pNuevoUsuario);

    localStorage.setItem("listaPersonasLS", JSON.stringify(listaPersonas))
}



function getListasPersonas() {
    let listaPersonasLocal = JSON.parse(localStorage.getItem("listaPersonaLS"));
    if(listaPersonasLocal == null) {
        listaPersonasLocal = listaPersonas;
    }
    return listaPersonasLocal;
}

