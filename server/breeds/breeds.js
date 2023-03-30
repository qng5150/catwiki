let allBreeds = [];

async function init() {
    return fetch("https://api.thecatapi.com/v1/breeds")
        .then((response) => response.json())
        .then((data) => {
            allBreeds = data;
        });
}

function all() {
    return allBreeds;
}

async function findByName(name) {
    const MAX_RESULT = 10;
    if (allBreeds.length === 0) {
        await init();
    }
    let filtered = allBreeds.filter(breed => breed.id.startsWith(name));

    if (filtered.length > MAX_RESULT) {
        filtered = filtered.slice(0, MAX_RESULT);
    }
    return addImagesForBreeds(filtered);
}

async function addImagesForBreeds(breeds) {
    let imagePromises = [];
    breeds.forEach(breed => {
        imagePromises.push(
            fetch(`https://api.thecatapi.com/v1/images/${breed.reference_image_id}`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Network response was not OK");
                    }
                    return response.json();
                })
                .then(data => {
                    breed["image_url"] = data.url;
                    return breed;
                })

        );
    })

    return await Promise.all(imagePromises);
}

async function getBreedById(breedId) {
    let filtered = allBreeds.find(breed => breed.id == (breedId));

    return fetch(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${breedId}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not OK");
            }
            return response.json();
        })
        .then(data => {
            if (Array.isArray(data) && data.length > 0) {
                filtered["image_list"] = data;
            }
            return filtered;
        });
}
exports.init = init;
exports.all = all;
exports.findByName = findByName;
exports.getBreedById = getBreedById;
