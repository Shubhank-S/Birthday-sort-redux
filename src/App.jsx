import React, { useState, useEffect } from 'react';
import RadioButtons from './components/RadioButtons';
import Table from './components/Table';


const App = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch('/people.json')
      .then(response => response.json())
      .then(data => setPeople(data))
      .catch(error => console.error(error));
  }, []);

  const handleSortChange = event => {
    const sortBy = event.target.value;
    if (sortBy === 'name') {
      setPeople([...people].sort((a, b) => a.name.localeCompare(b.name)));
    } else if (sortBy === 'age') {
      setPeople([...people].sort((a, b) => new Date(b.birthdate) - new Date(a.birthdate)));
    }
  };

  return (
    <div>
      <RadioButtons handleSortChange={handleSortChange} />
      <Table people={people} />
    </div>
  );
};

export default App;
