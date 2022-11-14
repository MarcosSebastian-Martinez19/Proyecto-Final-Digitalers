const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const MOVIES = 'https://api.themoviedb.org/3/movie/popular?api_key=694d323fb2e2bf85c217db03d8904a3b&language=en-US&page=1';
const TENDRING = "https://api.themoviedb.org/3/trending/all/day?api_key=694d323fb2e2bf85c217db03d8904a3b"
const TVSHOWS = "https://api.themoviedb.org/3/tv/popular?api_key=694d323fb2e2bf85c217db03d8904a3b&language=en-US&page=1"

const tendencias = document.getElementById("tendencias");
const series = document.getElementById("series");
const peliculas = document.getElementById("peliculas");
const miLista = document.getElementById('miLista')
const bannerDestacada = document.getElementById('mostrarBanner')

buscarPelis(MOVIES, peliculas);
buscarPelis(TENDRING, tendencias);
buscarPelis(TVSHOWS, series);
buscarPeliDestacada(TENDRING, bannerDestacada);

async function buscarPelis(url, id) {
    const resp = await fetch(url);
    const respData = await resp.json();

    // console.log(respData);
    verPelis(respData.results, id);
}

async function buscarPeliDestacada(url, id) {
    const resp = await fetch(url);
    const respData = await resp.json();

    // console.log(respData.results);
    verPelisDestacada(respData.results, id)
}

function verPelis(categoria, idP) {
    idP.innerHTML = "";
    categoria.forEach((movie) => {
        const {
            poster_path,
            title,
            name,
            id
        } = movie;

        const movieEl = document.createElement("div");
        movieEl.classList.add("contenedor-movie");

        movieEl.innerHTML = `
            <div class="card-movie tab-item">
                <div class="content">
                    <p id="nombrePeli">${title || name}</p>
                    <a href="reproductor.html" id="${id}">Ver <i class="fa-regular fa-circle-play"></i></a>
                    <a id="${id}">Mi Lista <i class="fa-solid fa-plus"></i></a>
                </div>
                <img src="${IMGPATH + poster_path}" alt="${title}">
                </div>
        `

        idP.appendChild(movieEl)
    })
}

const idPeliDestacada = 505642

function verPelisDestacada(peliID, idP) {

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

            const movieEl = document.createElement("div");

            movieEl.innerHTML = `
            <div class="banner" style="background-image:url(${IMGPATH + backdrop_path})">
                        <div class="banner__contents">
                                <h1 class="banner__title">${title || name}</h1>
                                <div class="banner__description">
                                ${overview}
                                </div>
                                <div class="banner__buttons">
                                    <a href="reproductor.html" class="banner__button">Ver <i class="fa-regular fa-circle-play"></i></a>
                                    <a class="banner__button" id="${id}">Mi Lista <i class="fa-solid fa-plus"></i></a>
                                </div>
                        </div>
                </div>
            `
            idP.appendChild(movieEl)
        }
    });
}