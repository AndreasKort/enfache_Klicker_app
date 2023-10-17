import React from 'react';
import ReactDOM from 'react-dom';
import Neu from './neu';  // in aufgabe 1 erstellte datei
import Zähler from './Zähler'; // Aufgabe 2 
import Uhrzeit from './Uhrzeit'; // Aufgabe 2 

ReactDOM.render(
  <div>
    <Neu />
    <Zähler /> {/* Rendern der "Zähler"-Komponente */}
    <Uhrzeit /> {/* Rendern der "Uhrzeit"-Komponente */}
  </div>,
  document.getElementById('root')
);
