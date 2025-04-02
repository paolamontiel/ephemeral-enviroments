export function obtenerPokemon(busqueda) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${busqueda}`)
        .then(res => res.ok ? res.json() : null);
}

export function obtenerMusica(busqueda) {
    return fetch(`https://itunes.apple.com/search?term=${busqueda}&media=music&limit=5`)
        .then(res => res.json());
}

export function obtenerPais(busqueda) {
    return fetch(`https://restcountries.com/v3.1/name/${busqueda}`)
        .then(res => res.json());
}

export function limpiarTabla(tablaId) {
    document.querySelector(`#${tablaId} tbody`).innerHTML = "";
}

export function agregarFila(tablaId, imagen, nombre, dato1, dato2) {
    let tabla = document.querySelector(`#${tablaId} tbody`);
    let fila = tabla.insertRow();
    fila.innerHTML = `
        <td><img src="${imagen}" alt="${nombre}" class="img-table"></td>
        <td>${nombre}</td>
        <td>${dato1}</td>
        <td>${dato2}</td>
    `;
}
