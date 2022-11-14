const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const MOVIESDETAILS = "https://api.themoviedb.org/3/movie/505642?api_key=694d323fb2e2bf85c217db03d8904a3b&language=en-US"
const MOVIESCREDITS = "https://api.themoviedb.org/3/movie/505642/credits?api_key=694d323fb2e2bf85c217db03d8904a3b&language=en-US"

// const TVSHOWSDETAILS = ""
// const TVSHOWSCREDITS = ""

const fichaTecnica = document.querySelector('#reproductorPelicula #site-container #header')
const repartos = document.querySelector('#reproductorPelicula #site-container #profiles .img-reparto__container')

buscarDetalles(MOVIESDETAILS, fichaTecnica)

async function buscarDetalles(url, id) {
    const resp = await fetch(url);
    const respData = await resp.json();

    // console.log(respData);
    verDetallesPelis(respData, id);
}

function verDetallesPelis(categoria, idP) {

    idP.innerHTML = "";
    let {
        adult,
        genres,
        backdrop_path,
        original_title,
        overview,
        release_date,
    } = categoria;

    if(adult == false) {
        adult = "+18"
    } else {
        adult = "Apto Todo Público"
    }

    const movieEl = document.createElement("div");

    movieEl.innerHTML = `
    <div class="container-preview" style="background-image: url(${IMGPATH + backdrop_path});">
        <div class="details-preview">
            <h1 class="title-preview">${original_title}</h1>
            <div class="buttons-preview">
                <button type="button">Quitar <i class="fa-sharp fa-solid fa-xmark"></i></button>
                <button type="button">Reproducir <i class="fa-regular fa-circle-play"></i></button>
            </div>
        </div>
    </div>

    <div class="description-container">
        <div class="ficha-tecnica">
            <h2 class="title-descprition">Ficha técnica:</h2>
            <p class="genero">Género: <span>${genres[0].name}</span>, <span>${genres[1].name}</span>, <span>${genres[2].name}</span></p>
            <p class="annio-lanzamiento">Lanzamiento: ${release_date}</p>
            <p class="clasificacion">Clasificacion: ${adult}</p>
        </div>

        <div class="sinopsis">
            <h2 class="title-descprition">Sinopsis:</h2>
            <p>${overview}</p>
        </div>
    </div>

    <div class="reparto-container">
        <h2 class="title-reparto">
            Reparto
        </h2>
    </div>
        `

    idP.appendChild(movieEl)
}

// Creditos

buscarCreditos(MOVIESCREDITS, repartos)

async function buscarCreditos(url, id) {
    const resp = await fetch(url);
    const respData = await resp.json();

    // console.log(respData.cast);
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
        
        if( profile_path != undefined) {
            const movieEl = document.createElement("div");
            movieEl.classList.add('img-reparto')

            movieEl.innerHTML = `
                <img src="${IMGPATH +profile_path}" alt="">
                <p>${original_name}</p>
            `
            idP.appendChild(movieEl)
        }
    })
}