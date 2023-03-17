import React from 'react';

const Table = ({ people }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Birthdate</th>
        </tr>
      </thead>
      <tbody>
        {people.map(person => (
          <tr key={person.name}>
            <td>{person.name}</td>
            <td>{person.birthdate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
