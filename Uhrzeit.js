import React, { useState, useEffect } from 'react'; // Importiere React und die benötigten Helfer

function Uhrzeit() { // Uhrzeit Funktion
const [zeit, setZeit] = useState(aktuelleZeit()); //  die aktuelle Zeit wird ermittelt

useEffect(() => {
    const interval = setInterval(() => {
      setZeit(aktuelleZeit()); // Aktualisiere die Zeit jede Sekunde
    }, 1000);

   return () => {
  clearInterval(interval); // Damit wird alle 1000 secunden die zeit neu ermittelt
    };
  }, []);
  function aktuelleZeit() { // Funktion um die aktuelle Zeit zu erhalten
   const jetzt = new Date();
   const stunden = jetzt.getHours().toString().padStart(2, '0');
   const minuten = jetzt.getMinutes().toString().padStart(2, '0');
   const sekunden = jetzt.getSeconds().toString().padStart(2, '0');
    return `${stunden}:${minuten}:${sekunden}`; // die reienfolge wie die zeit angezeigt wird
  }

  return (// Rendere der Uhrzeit
  <div>
      <p>Aktuelle Uhrzeit: {zeit}</p> 
    </div>
);
}

export default Uhrzeit; 
