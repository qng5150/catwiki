import React, {useState} from "react";
import {Link, useParams} from "react-router-dom";
import cors from "../utils/cors";

let apiUrl = process.env.REACT_APP_BASE_URL;
function BreedDetails() {
    const { id } = useParams();
    const [breed, setBreed] = useState({});
    React.useEffect(() => {
        const fetchData = fetch(`${apiUrl}/breed/${id}`, cors.options);
        fetchData
            .then((res) => res.json())
            .then((data) => setBreed(data));
    }, []);
    if (breed) {
        let listItems = null;
        if (Array.isArray(breed.image_list) && breed.image_list.length > 0) {
            listItems = breed.image_list.map(image =>
                <ImageItem key={image.id} image={image}/>
            );
        }
        return (
            <div className="m-5">
                <div className="columns">
                    <div className="column">
                        <Link to={"/"}><h2 class="title">&lt; {breed.name}</h2></Link>
                        {breed.description}
                        <table className="table mt-2">
                            <tr>
                                <th>Temperament</th>
                                <td>{breed.temperament}</td>
                            </tr>
                            <tr>
                                <th>Origin</th>
                                <td>{breed.origin}</td>
                            </tr>
                            <tr>
                                <th>Lifespan</th>
                                <td>{breed.life_span}</td>
                            </tr>
                            <tr>
                                <th>Adaptability</th>
                                <td>{breed.adaptability}</td>
                            </tr>
                            <tr>
                                <th>Affection level</th>
                                <td>{breed.affection_level}</td>
                            </tr>
                            <tr>
                                <th>Child Friendly</th>
                                <td>{breed.child_friendly}</td>
                            </tr>
                            <tr>
                                <th>Grooming</th>
                                <td>{breed.grooming}</td>
                            </tr>
                            <tr>
                                <th>Intelligence</th>
                                <td>{breed.intelligence}</td>
                            </tr>
                            <tr>
                                <th>Health Issues</th>
                                <td>{breed.health_issues}</td>
                            </tr>
                            <tr>
                                <th>Social Needs</th>
                                <td>{breed.social_needs}</td>
                            </tr>
                            <tr>
                                <th>Stranger Friendly</th>
                                <td>{breed.stranger_friendly}</td>
                            </tr>
                        </table>
                    </div>

                </div>
                <div className="columns is-multiline ">
                    {listItems}
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <h1>No Details</h1>
            </div>
        );
    }
}

function ImageItem({image}) {
    return (
        <div className="column is-one-fifths">
            <img src={image.url} className="image is-128x128" alt={image.id}/>
        </div>
    );
}

export default BreedDetails;