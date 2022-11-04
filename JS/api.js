// API The Movie Data Base

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

// FUNCIONA
const MOVIES = 'https://api.themoviedb.org/3/movie/popular?api_key=694d323fb2e2bf85c217db03d8904a3b&language=en-US&page=1';

// NO FUNCIONA
const TENDRING = "https://api.themoviedb.org/3/trending/all/day?api_key=694d323fb2e2bf85c217db03d8904a3b"

// FUNCIONA
const TVSHOWS = "https://api.themoviedb.org/3/tv/popular?api_key=694d323fb2e2bf85c217db03d8904a3b&language=en-US&page=1"

// const MOVIESDETAILS = ""

// const MOVIESCREDITS = ""

// llamamos el div del HTML

const tendencias = document.getElementById("tendencias");
const series = document.getElementById("series");
const peliculas = document.getElementById("peliculas");
const miLista = document.getElementById("miLista");

buscarPelis(MOVIES, peliculas);
buscarPelis(TENDRING, tendencias);
buscarPelis(TVSHOWS, series);

// creamos una Función Asíncrona para buscar la peli
async function buscarPelis(url, id) {
    const resp = await fetch(url);
    const respData = await resp.json();

    // Imprimimos en consola la respuesta en Formato JSON
    console.log(respData);
    // Del formato JSON seleccionamos results
    verPelis(respData.results, id);

}

function verPelis(categoria, id) {
    // Limpiamos el div
    id.innerHTML = "";
    categoria.forEach((movie) => {
        const {
            poster_path,
            title,
            name
        } = movie;
        // Creamos un div nuevo
        const movieEl = document.createElement("div");
        movieEl.classList.add("contenedor-movie");

        // Creamos un elemento HTML del card de la película
        movieEl.innerHTML = `
            <div class="card-movie">
                <div class="content">
                    <p>${title || name}</p>
                    <button><i class="fa-regular fa-circle-play"></i> Ver</button>
                    <button><i class="fa-regular fa-circle-plus"></i> Añadir a Lista</button>
                </div>
                <img src="${IMGPATH + poster_path}" alt="${title}">
            </div>
        `
        // Agregamos como hijo nuevo el card de la película
        id.appendChild(movieEl)
    });
}