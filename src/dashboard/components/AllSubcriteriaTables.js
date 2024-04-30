import React from 'react';

import './Table.css'

const generateSubcriteriaTable = (subcriteria) => {
  const rows = [];

  // Iterate over each subcriterion
  for (const subcriterion in subcriteria) {
    if (subcriteria.hasOwnProperty(subcriterion)) {
      const values = subcriteria[subcriterion];
      console.log(values)

      // Generate a row for the subcriterion
      rows.push(
        <tr key={subcriterion}>
          <td>{subcriterion}</td>
          {/* Generate cells for each value */}
          {values.map((value, index) => (
            <td key={index}>{value}</td>
          ))}
        </tr>
      );
    }
  }

  // Return the generated table
  return (
    <div>
    <table>
    <thead>
        <tr>
          <th rowSpan="2">Criteria</th>
          <th colSpan="4" >Rating</th>

        </tr>
        <tr>
          
          <th >4</th>
          <th >3</th>
          <th >2</th>
          <th >1</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
    </div>
  );
};

const AllSubcriteriaTables = ({ criteria }) => {
  const tables = [];


  // Iterate over each criterion
  for (const criterion in criteria) {
    if (criteria.hasOwnProperty(criterion)) {
      const subcriteria = criteria[criterion];

      // Generate a table for each subcriterion
      tables.push(
        <div key={criterion}>
          <h2>{criterion}</h2>
          {generateSubcriteriaTable(subcriteria)}
        </div>
      );
    }
  }

  // Return the generated tables
  return (
    <div>
      {tables}
    </div>
  );
};

export default AllSubcriteriaTables;