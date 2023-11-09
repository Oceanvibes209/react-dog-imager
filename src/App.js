import React, { useState } from 'react';
import './App.css';

function App() {
  const [dogImageUrl, setDogImageUrl] = useState('');
  // This line declares a state variable called dogImageUrl and a function called setDogImageUrl using the useState hook. 
  // The initial value of dogImageUrl is an empty string.
  const [buttonPressed, setButtonPressed] = useState(false);
  // This line declares another state variable, buttonPressed, and its associated setter function, setButtonPressed, also using the useState hook. 
  //The initial value of buttonPressed is false.

  const getNewDog = async () => { //This line defines an asynchronous function named getNewDog. This function will be used to fetch a new dog image from an API.
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      //This line uses the fetch function to send an HTTP request to the 'https://dog.ceo/api/breeds/image/random' URL, 
      // which is an API endpoint for fetching a random dog image. The await keyword is used to wait for the response to be resolved, making the code asynchronous.

      const json = await response.json(); 
      //This line reads the response data as JSON using the json method. It waits for the JSON parsing to complete and assigns the parsed data to the variable json.

      setDogImageUrl(json.message);// This line updates the dogImageUrl state variable with the URL of the dog image obtained from the API response.
      setButtonPressed(true); // Set the buttonPressed state to true, This is typically used to indicate that the button has been pressed and some action has occurred.
    } catch (error) {
      console.error('Dog is sleeping, they will be back soon! Try Again Later', error);
      //In the event of an error during the API request (e.g., if the network is unavailable or the API is down), this block catches the error and logs an error message to the console. 
      //The message indicates that the dog is "sleeping" and suggests trying again later.
    }
  };

  return (
    <div className="App">
      <div id="dogImage">
        <img src={dogImageUrl} alt=" random dog" height="400" width="450" />
      </div>
      <button
        id="dogButton"
        onClick={getNewDog}
        className={buttonPressed ? 'glowing-button' : ''}
      >
        CLICK ME
      </button>
    </div>
  );
}



export default App;