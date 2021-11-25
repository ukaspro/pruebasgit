import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';


const Edit = () => {
    let history = useHistory();
    const {id} = useParams();
    const[pet, setPet] = useState({
    pname: "",
    type: "",
    description:"",
    skill1: ""
    });

    const { pname, type, description,skill1 } = pet;
    const onInputChange = e => {
        setPet({...pet ,[e.target.name]: e.target.value})
    };
    useEffect(() => {
        loadPet();
    },[]);

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3030/pets/${id}`, pet);
        history.push("/");
    };

    const loadPet = async () =>{
        const result = await axios.get(`http://localhost:3030/pets/${id}`);
        setPet(result.data);
    };

    return (
    
        <div className="container">
            <h1 className="display">Pet Shelter</h1> 
            <form className="form" onSubmit={e => onSubmit(e)}>
             <div className="row">
                <div className="col-sm">
                    <div className="form-group">
                        <label>Pet Name:{pet.pname}</label>
                        <input
                            type= "text"
                            className="form-control"
                            placeholder="Add the pet name"
                            name="pname"
                            value={pname} 
                            onChange={ e => onInputChange(e)}
                        />    
                    </div>

                    <div className="form-group">
                        <label>Pet Type:</label>
                        <input
                            type= "text"
                            className="form-control"
                            placeholder="Add the pet type"
                            name="type"
                            value={type}
                            onChange={ e => onInputChange(e)} 
                        />    
                    </div>
                    
                    <div className="form-group">
                        <label>Pet Description:</label>
                        <input
                            type= "text"
                            className="form-control"
                            placeholder="Add a description of your pet"
                            name="description"
                            value={description}
                            onChange={ e => onInputChange(e)} 
                        />    
                    </div>
                </div>

                <div className="col-sm">
                    <div className="form-group">
                        <label>Skill 1:</label>
                        <input
                            type= "text"
                            className="form-control"
                            placeholder=""
                            name="skill1"
                            value={skill1}
                            onChange={ e => onInputChange(e)}  
                        />    
                    </div>

                    <div className="form-group">
                        <label>Skill 2:</label>
                        <input
                            type= "text"
                            className="form-control"
                            placeholder=""
                            name="skill2" 
                        />    
                    </div>

                    <div className="form-group">
                        <label>Skill 3:</label>
                        <input
                            type= "text"
                            className="form-control"
                            placeholder=""
                            name="skill3" 
                        />    
                    </div>
                </div>
            </div>
            <button className="btn btn-warning">Update Pet</button> 
            </form>
        </div>
    );
};

export default Edit;