import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const Petid = () =>{

    const [pet, setPet] = useState({
        pname: "",
        type: "",
        description:"",
        skill1: ""
        });
    const {id} = useParams();

    useEffect(()=>{
        loadPet();
    }, []);

    const loadPet = async () => {
        const res = await axios.get (`http://localhost:3030/pets/${id}`);
        setPet(res.data);
    };

    const deletePet = async id => {
        await axios.delete(`http://localhost:3030/pets/${id}`);
        loadPet();
    };

    const [count, setCount]=useState(0);

    return (
        <div className="container">
            <h1 className="display">Pet Shelter</h1>
            <h3 className="display-h3">Details about {pet.pname}</h3>
            <Link className="btn btn-primary" to="/">
                back to Home
            </Link>
            <Link class="btn btn-danger" to="/" onClick={() => deletePet(pet.id)}> 
                Adopt : {pet.pname}
            </Link>
            <h3 className="display-h3">Pet Id: {id}</h3>
            <ul className="list-group">
            <li className="list-group">Pet type: {pet.type}</li>
            <li className="list-group">Description: {pet.description}</li>
            <li className="list-group">Skills: {pet.skill1}</li>
            </ul>
            <h3 className="display">likes: {count}</h3>
            <button className="btn btn-success" onClick={()=>setCount(count+1)}> Like {pet.pname}</button>
       </div>
    );
};

export default Petid;