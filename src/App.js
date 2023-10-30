import React, { useState } from 'react';
import './App.css';

function App() {
  const [dogImageUrl, setDogImageUrl] = useState('');
  const [buttonPressed, setButtonPressed] = useState(false);

  const getNewDog = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const json = await response.json();
      setDogImageUrl(json.message);
      setButtonPressed(true); // Set the buttonPressed state to true
    } catch (error) {
      console.error('Dog is sleeping, they will be back soon! Try Again Later', error);
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