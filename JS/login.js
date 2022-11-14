let listaPersonas = []

document.querySelector('#submitLogin').addEventListener("click", registrar, mostrarDatos);

function registrar() {
    let usuarios = [];
    let email = '';
    let password = '';

    email = document.querySelector('#emailLogin').value;
    password = document.querySelector('#passwordLogin').value;
    if(email !== "" && password !== "") {
        usuarios.push(email, password);
        registrarPersonaEnSistema(usuarios);
        mostrarDatos()
    }
};

function mostrarDatos() {
    let personas = getListasPersonas();
    let tbody = document.querySelector('#mostrar div');

    tbody.innerHTML = '';

    for (let i = 0; i < 1; i++) {
        let fila = document.createElement('div')
        fila.classList.add('.login-div')
        let celdaEmail = document.createElement('p')
        
        celdaEmail.innerHTML = personas[i][0]

        fila.appendChild(celdaEmail)

        tbody.appendChild(fila)
    }

    let loginBody = document.querySelector('#login')
    let navbarMainNone = document.querySelector('.navbarMainNone')
    let navbarLeft = document.querySelector('.navbar-left ul')
    let contenedorPrincipal = document.querySelector('#principal')
    let bannerPeliDestacada = document.getElementById('bannerPeliDestacada')

    loginBody.classList.remove('login_body')
    loginBody.classList.add('login_body-None')
    navbarMainNone.classList.remove('navbarMainNone')
    navbarLeft.classList.remove('navbarNone')
    navbarLeft.classList.add('navbar')
    contenedorPrincipal.classList.remove('contenedor-principalNone')
    contenedorPrincipal.classList.add('contenedor-principal')
    bannerPeliDestacada.classList.remove('bannerPeliDestacadaNone')
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