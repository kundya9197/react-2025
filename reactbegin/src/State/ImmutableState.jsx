import React, { useState } from 'react';

function ImmutableState() {
  const [items, setItems] = useState(["Apple", "Banana"]);

  const addItem = () => {
    // Create new array with added item
    setItems([...items, "Orange"]);
  };

  return (
    <div>
      <h3>Items:</h3>
      <ul>
        {items.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
      <button onClick={addItem}>Add Orange</button>
      
    </div>
  );
}
export default ImmutableState;
