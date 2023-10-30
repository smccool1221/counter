import React, { useState, useEffect } from 'react';

const  Greeting = ({ defaultName }) => {
  const [name, setName] = useState(defaultName);
  const [greeting, setGreeting] = useState(`Hello, ${defaultName}`);

  useEffect(() => {
    setGreeting(`Hello, ${name}`);
  }, [name]);

  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <p>{greeting}</p>
    </div>
  );
}

export default Greeting;