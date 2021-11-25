import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Home = () =>{
    const [pets,setPet] = useState([]);

    useEffect(()=>{
        loadPets();
    }, []);

    const loadPets = async () => {
        const result = await axios.get("http://localhost:3030/pets");
        setPet(result.data);
    }
    return (
        <div className="container">
            <div className="py-4">
                <h1 className="display">Pet Shelter</h1>
                <h3 className="display-h3">These pets are looking for a good home</h3>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pets.map((pet, index) => (
                                <tr>
                                    <th scope="row">{index+1}</th>
                                    <td>{pet.pname}</td>
                                    <td>{pet.type}</td>
                                    <td>
                                        <Link class="btn btn-primary" to={`/pets/${pet.id}`}> Details</Link>
                                        <Link class="btn btn-outline-primary" to={`/pets/edit/${pet.id}`}> 
                                        Edit
                                        </Link>
                                    </td>
                                </tr>
                                ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;