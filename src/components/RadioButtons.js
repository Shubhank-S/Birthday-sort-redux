import React from 'react';

const RadioButtons = ({ handleSortChange }) => {
  return (
    <div>
      <label>
        <input type="radio" name="sort" value="name" onChange={handleSortChange} />
        Sort by Name
      </label>
      <label>
        <input type="radio" name="sort" value="age" onChange={handleSortChange} />
        Sort by Age
      </label>
    </div>
  );
};

export default RadioButtons;
