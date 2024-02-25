"use client"
import React, {useState} from 'react';
import Nav from '../_components/Nav'

export default function Add() {

  const [error, setError] = useState(null);

  function handleSubmit(e) {
    
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    let jsonObject = {};
    formData.forEach((value, key) => {
      jsonObject[key] = value;
    });

    const requiredFields = ['Company Name', 'Position', 'Location', 'Applied At', 'Date'];
    const emptyFields = requiredFields.filter(field => !jsonObject[field]);

    if (emptyFields.length > 0) {
      const errorMessage = `Please fill in the following fields: ${emptyFields.join(', ')}`;
      setError(errorMessage);
    } else {
      
      fetch('/some-api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonObject),
      })

    .then(response => {
      if (response.ok) {
        console.log('Application saved successfully');
      } else {
        console.error('Error saving data:', response.statusText);
      }
    })

    .catch(error => {
      console.error('Error saving data:', error.message);
    });
   }
  }


  return (
    
    <div>
      <Nav />
      
      <p> Hello Add </p>

      {error && <div style={{ color: 'red' }}>{error}</div>}

      <form method="post" onSubmit={handleSubmit}>
        <label>
          Company Name
          <textarea name="companyName" rows={1} cols={40} />
        </label>

        <label>
          Position
          <textarea name="position" rows={1} cols={40}/>
        </label>

        <label>
          Location
          <textarea name="location" rows={1} cols={40} />
        </label>

        <label>
          Applied At
          <textarea name="appliedAt" rows={1} cols={40} />
        </label>

        <label>
          Date
          <input type='date' />
        </label>

        <button type="submit"> Save </button>
      </form>

    </div>
  );
}