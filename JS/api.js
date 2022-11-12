// API The Movie Data Base

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

// FUNCIONA
const MOVIES = 'https://api.themoviedb.org/3/movie/popular?api_key=694d323fb2e2bf85c217db03d8904a3b&language=en-US&page=1';

// FUNCIONA
const TENDRING = "https://api.themoviedb.org/3/trending/all/day?api_key=694d323fb2e2bf85c217db03d8904a3b"

// FUNCIONA
const TVSHOWS = "https://api.themoviedb.org/3/tv/popular?api_key=694d323fb2e2bf85c217db03d8904a3b&language=en-US&page=1"

// llamamos el div del HTML

const tendencias = document.getElementById("tendencias");
const series = document.getElementById("series");
const peliculas = document.getElementById("peliculas");
const miLista = document.getElementById('miLista')
const bannerDestacada = document.getElementById('mostrarBanner')

buscarPelis(MOVIES, peliculas);
buscarPelis(TENDRING, tendencias);
buscarPelis(TVSHOWS, series);
buscarPeliDestacada(TENDRING, bannerDestacada);

// creamos una Función Asíncrona para buscar la peli
async function buscarPelis(url, id) {
    const resp = await fetch(url);
    const respData = await resp.json();

    // Imprimimos en consola la respuesta en Formato JSON
    console.log(respData);
    // Del formato JSON seleccionamos results
    verPelis(respData.results, id);
}

async function buscarPeliDestacada(url, id) {
    const resp = await fetch(url);
    const respData = await resp.json();

    // Imprimimos en consola la respuesta en Formato JSON
    console.log(respData.results);
    // Del formato JSON seleccionamos results
    verPelisDestacada(respData.results, id)
}

function verPelis(categoria, idP) {
    // Limpiamos el div
    idP.innerHTML = "";
    categoria.forEach((movie) => {
        const {
            poster_path,
            title,
            name,
            id
        } = movie;
        idPeliculas.push(id)
        // Creamos un div nuevo
        const movieEl = document.createElement("div");
        movieEl.classList.add("contenedor-movie");

        // Creamos un elemento HTML del card de la película
        movieEl.innerHTML = `
            <div class="card-movie tab-item">
                <div class="content">
                    <p id="nombrePeli">${title || name}</p>
                    <a href="reproductor.html" id="${id}"><i class="fa-regular fa-circle-play"></i> Ver</a>
                    <a id="${id}"><i class="fa-solid fa-plus"></i> Mi Lista</a>
                </div>
                <img src="${IMGPATH + poster_path}" alt="${title}">
                </div>
        `
        // Agregamos como hijo nuevo el card de la película
        idP.appendChild(movieEl)
    })
}

const idPeliDestacada = 505642

function verPelisDestacada(peliID, idP) {
    // Limpiamos el div
    idP.innerHTML = "";
    peliID.forEach((movie) => {
        if (movie.id == idPeliDestacada) {
            const {
                backdrop_path,
                title,
                name,
                id,
                overview,
            } = movie;

            // Creamos un div nuevo

            const movieEl = document.createElement("div");

            // Creamos un elemento HTML del card de la película
            movieEl.innerHTML = `
            
            <div class="banner" style="background-image:url(${IMGPATH + backdrop_path})">
                        <div class="banner__contents">
                                <h1 class="banner__title">${title || name}</h1>
                                <div class="banner__description">
                                ${overview}
                                </div>
                                <div class="banner__buttons">
                                    <a href="reproductor.html" class="banner__button"><i class="fa-regular fa-circle-play"></i> Ver</a>
                                    <a class="banner__button" id="${id}"><i class="fa-solid fa-plus"></i> Mi Lista</a>
                                </div>
                        </div>
                </div>
            `
            idP.appendChild(movieEl)
        }
    });
}

let idPeliculas = [];
console.log(idPeliculas)