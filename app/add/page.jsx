"use client"
import React, {useState} from 'react';
import Nav from '../_components/Nav'


export default function Add() {

  const [error, setError] = useState(null);

  function handleSubmit (e) {
    
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
    
    <main className="flex flex-col items-center justify-start p-4 space-y-6 h-screen">
      <Nav />
      
      <p> Hello Add </p>

      {error && <div style={{ color: 'red' }}>{error}</div>}

      <form method="post" onSubmit={handleSubmit} className='flex flex-col justify-center items-center w-3/4 space-y-2'>
        <label className='flex justify-between w-3/5'>
          Company Name
          <textarea name="companyName" rows={1} cols={40} />
        </label>

        <label className='flex justify-between w-3/5'>
          Position
          <textarea name="position" rows={1} cols={40}/>
        </label>

        <label className='flex justify-between w-3/5'>
          Location
          <textarea name="location" rows={1} cols={40} />
        </label>

        <label className='flex justify-between w-3/5'>
          Applied At
          <textarea name="appliedAt" rows={1} cols={40} />
        </label>

        <label className='flex justify-between w-3/5'>
          Date
          <input type='date' />
        </label>

        <button type="submit" className="bg-blue-300 p-1"> Save </button>
      </form>

    </main>
  );
}