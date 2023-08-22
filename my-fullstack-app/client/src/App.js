/*import './App.css'; */

/* function App() {
  return (
    <div className="App">
    Hallo Welt
    </div>
  );
}

export default App;
*/

// neue
import React, { useState, useEffect } from 'react';

function App() {
  const [ nachricht, setNachricht ] = useState('');

  useEffect( () => {
    fetch('http://localhost:8080/api/nachricht')
      .then( res => res.json() )
      .then( json => {
        console.log(json);
        setNachricht(json.nachricht);
      } )
  }, [] );

  return (
    <div className="App">
    { nachricht }
    </div>
  );
}


export default App;