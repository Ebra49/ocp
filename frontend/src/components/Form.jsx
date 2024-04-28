import React, { useState } from 'react';
import image from './image.jpg';
import './form.css';
import axios from 'axios'

function ReclamationForm() {
  const [values, setValues] = useState({
    nom: "",
    prenom: "",
    matricule: "",
    email: "",
    message: ""
  });
  
  const handleInput = (e) => {
    const { name, value } = e.target;
    setValues(prevState => ({
        ...prevState,
        [name]: value
    }));
};


const handleSubmit = (event) => {
  event.preventDefault();
  console.log("Form data to be submitted:", values); // Log the form data before sending the request
  axios.post('http://localhost:8081', values)
      .then(res => {
          console.log("Response from server:", res.data); // Log the response from the server
      })
      .catch(err => {
          console.error("Error submitting form:", err); // Log any errors
      });
};


  return (
    <div className="container">
      <img src={image} alt="Image Before Form" className="background-image" />
      <div className="content">
        <h1 className="title">Formulaire de Réclamation</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nom">Nom :</label>
            <input
              type="text"
              id="nom"
              name='nom'
              onChange={handleInput}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="prénom">Prénom :</label>
            <input
              type="text"
              id="prénom"
              name='prenom'
              onChange={handleInput}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="matricule">Matricule :</label>
            <input
              type="text"
              id="matricule"
              onChange={handleInput}
              name='matricule'
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              onChange={handleInput}
              name='email'
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message :</label>
            <textarea
              id="message"
              onChange={handleInput}
              name='message'
              required
            ></textarea>
          </div>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
}

export default ReclamationForm;
