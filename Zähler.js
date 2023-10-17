import React, { useState } from 'react';// Iport und am ende Export

function Zählen() {
  const [count, setCount] = useState(0); // die bezeichnung und was sie bewirken soll

  const increaseCount = () => {
    setCount(count + 2); // Dadurch wird die kontante beim betätigen von onClick um 2 erhöt
  };

  return ( // der Klick Button auf der Webseite der die Constante überschreibt
    <div>
      <p>Zählen: {count}</p> 
      <button onClick={increaseCount}>Erhöhen um 2</button>
    </div>
  );
}

export default Zählen;
