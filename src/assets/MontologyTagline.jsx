import React from 'react';
import taglineConfig from '../assets/montologyTagline.json'; // Import the JSON file

function MontologyTagline() {
  return (
    <div id="montologyTagline">
      <h1>{taglineConfig.title}</h1>
      <p>{taglineConfig.pronunciation}</p>
      <p><strong>{taglineConfig.partOfSpeech}</strong></p>
      <p>{taglineConfig.definition}</p>
      <p><em>example:</em> {taglineConfig.example}</p>
    </div>
  );
}

export default MontologyTagline;