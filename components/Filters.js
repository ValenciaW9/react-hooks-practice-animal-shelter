import React from 'react';

const Filters = ({ onChangeType }) => {
  return (
    <div className="filters">
      <select name="type" onChange={onChangeType}>
        <option value="all">All</option>
        <option value="cat">Cats</option>
        <option value="dog">Dogs</option>
        <option value="micropig">Micropigs</option>
      </select>
      <button>Find Pets</button>
    </div>
  );
};

export default Filters;