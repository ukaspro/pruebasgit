import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const New = () => {
    let history = useHistory();
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

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3030/pets", pet);
        history.push("/");
    };
    return (
    
        <div className="container">
            <h1 className="display-h1">Pet Shelter</h1>
            <h3 className="display-h3">Know a pet needing a home?</h3>
            <form className="form" onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <label>Pet Name:</label>
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
           
            <button className="btn btn-primary btn-block">Add a new Pet</button> 
            </form>
        </div>
    );
};

export default New;