import React from 'react';

// import './Table.css'
import ExportRubricSub from './ExportRubricSub';
import { useRef } from 'react';

  // Function to generate dynamic table headers
  const renderTableHeaders = (subcriteria) => {
    if (!subcriteria) {
      return null; // Return null if criteria data is not available
    }

    const criteriaLength = Object.values(subcriteria)[0].length; // Get the first criteria
    return (
      <thead>
        <tr>
          <th style={{ borderBottom: 'none' }}>Criteria</th>
          <th colSpan={criteriaLength}>Rating</th>

        </tr>
        <tr>
          <th style={{ borderTop: 'none' }}></th>
          {/* Generate table headers based on the length of the first criteria */}
          {Array.from({ length: criteriaLength }, (_, index) => (
            <th key={index}>{criteriaLength - index}</th>
          ))}
        </tr>
      </thead>
    );
  };

const generateSubcriteriaTable = (subcriteria,rubricData,tableRef) => {
  
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
    <div className="table-container" >
    <table ref={tableRef}>
      {renderTableHeaders(subcriteria)}
      <tbody>
        {rows}
      </tbody>
    </table>
    </div>
  );
};

const SubcriteriaTables = ({ rubricData }) => {
  const tableRef = useRef(null);
  const tables = [];
  const criteria = rubricData.criteria
  if (!criteria) {
    return <div>Loading...</div>;
  }

  // Iterate over each criterion
  for (const criterion in criteria) {
    if (criteria.hasOwnProperty(criterion)) {
      const subcriteria = criteria[criterion];

      // Generate a table for each subcriterion
      tables.push(
        <div key={criterion}>
          <h2>{criterion}</h2>
          {generateSubcriteriaTable(subcriteria,rubricData,tableRef)}
        </div>
      );
    }
  }

  // Return the generated tables
  return (
    <div>
      <p>Subject: {rubricData.subject}</p>
      <p>Class Level:{rubricData.classLevel}</p>
      <p>Assessment: {rubricData.assessment}</p>
      <p>Weightage: {rubricData.grade}%</p>
      {tables}

      <ExportRubricSub data={rubricData.criteria} tableRef={tableRef} fileName={rubricData.classLevel+"_"+rubricData.subject+"_"+rubricData.assessment}/>
    </div>
  );
};

export default SubcriteriaTables;