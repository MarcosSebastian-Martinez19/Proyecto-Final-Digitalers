const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const API_KEY = "694d323fb2e2bf85c217db03d8904a3b"

const MOVIESDETAILS = "https://api.themoviedb.org/3/movie/505642?api_key=694d323fb2e2bf85c217db03d8904a3b&language=en-US"

const MOVIESCREDITS = "https://api.themoviedb.org/3/movie/505642/credits?api_key=694d323fb2e2bf85c217db03d8904a3b&language=en-US"

// const TVSHOWSDETAILS = ""
// const TVSHOWSCREDITS = ""

const fichaTecnica = document.querySelector('#reproductorPelicula #header')
const repartos = document.querySelector('#reproductorPelicula #profiles')

buscarDetalles(MOVIESDETAILS, fichaTecnica)


async function buscarDetalles(url, id) {
    const resp = await fetch(url);
    const respData = await resp.json();

    // Imprimimos en consola la respuesta en Formato JSON
    console.log(respData);
    // Del formato JSON seleccionamos results
    verDetallesPelis(respData, id);

}

function verDetallesPelis(categoria, idP) {

    idP.innerHTML = "";

    const {
        backdrop_path,
        original_language,
        original_title,
        overview,
        release_date,
        runtime,
        vote_average,
    } = categoria;

    const movieEl = document.createElement("div");
    movieEl.classList.add('description')

    movieEl.innerHTML = `
        <img src="${IMGPATH + backdrop_path}"/>
        <span class="subtitle">Ficha técnica:</span>    
        <div class="fichaTecnicaPeli">
                <div class="fichaTecnicaPeli_item">
                    <span>Lanzamiento:</span>    
                    <p>${release_date}</p>
                </div>
                <div class="fichaTecnicaPeli_item">
                    <span>Lenguaje:</span>    
                    <p>${original_language}</p>
                </div>
                <div class="fichaTecnicaPeli_item">
                    <span>Duración:</span>    
                    <p class"title">${runtime} minutos.</p>
                </div>
                <div class="fichaTecnicaPeli_item">
                    <span>Voto Promedio:</span>    
                    <p>${vote_average}</p>
                </div>
                <div class="fichaTecnicaPeli_item-overview">
                    <span>Sinopsis:</span>    
                    <p>${overview}</p>
                </div>
        </div>
        <div class="fichaTecnicaPeli_Title">    
            <p>${original_title}</p>
        </div>
        <button class="play"><i class="fa-regular fa-circle-play"></i> Ver</button>
        `

    idP.appendChild(movieEl)
}

// Creditos

buscarCreditos(MOVIESCREDITS, repartos)

async function buscarCreditos(url, id) {
    const resp = await fetch(url);
    const respData = await resp.json();

    // Imprimimos en consola la respuesta en Formato JSON
    console.log(respData.cast);
    // Del formato JSON seleccionamos results
    verCreditosPelis(respData.cast, id);

}

function verCreditosPelis(categoria, idP) {

    idP.innerHTML = "";
    categoria.forEach((person) => {
        const {
            character,
            original_name,
            profile_path
        } = person;

        const movieEl = document.createElement("div");
        movieEl.classList.add('profile')

        movieEl.innerHTML = `
            <div class="profile-content">
                <div class="profile-pic">
                    <img class="profile-pic-image" src="${IMGPATH + profile_path}"/>
                </div>
                <h3 class="profile-name">${original_name}</h3>
            </div>
            `

        idP.appendChild(movieEl)
    })
}