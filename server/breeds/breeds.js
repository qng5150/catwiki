

let allBreeds;

function init() {
    fetch("https://api.thecatapi.com/v1/breeds")
        .then((response) => response.json())
        .then((data) => {
            allBreeds = data;
        })
}

function all() {
    return allBreeds;
}

function findByName(name) {
    return allBreeds.filter(breed => breed.id.startsWith(name));
}
exports.init = init;
exports.all = all;
exports.findByName = findByName;
