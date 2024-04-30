import React from "react";
import './Table.css'
import ExportRubric from "./ExportRubric";
import { useState,useEffect,useRef } from "react";

const CriteriaTable = ({ rubricData}) => {

  const [tableData, setTableData] = useState([]);
  const tableRef = useRef(null);

  useEffect(() => {
    // Extracting data from the HTML table and updating the tableData state
    const data = Array.from(document.querySelectorAll('table tr')).map(row => (
      Array.from(row.children).map(cell => cell.textContent)
    ));

    setTableData(data);
  }, [rubricData]); // Run this effect only when rubricData changes

  // // Function to handle export to Excel
  // const handleExportToExcel = () => {
  //   // Call the export function with the table data
  //   ExportRubric(tableData, "rubrics");
  // };


  // Function to render table rows based on rubric data
  const rubricCriteria = rubricData.criteria
  console.log("This is rubric criteria",rubricCriteria,typeof(rubricCriteria))
  

  // Function to generate dynamic table headers
  const renderTableHeaders = () => {
    if (!rubricData.criteria) {
      return null; // Return null if criteria data is not available
    }

    const criteriaLength = Object.values(rubricData.criteria)[0].length; // Get the first criteria
    return (
      <thead>
        <tr>
          <th style={{ borderBottom: 'none' }}>Criteria</th>
          {/* <th></th> */}
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

  const renderTableRows = () => {
    if (!rubricCriteria) {
      return <div>Select Assessment, subject and classLevel...</div>;
    }
    console.log("rubric critere here:",Object.values(rubricCriteria)[0].length)

    return Object.keys(rubricCriteria).map((criteria) => (
      <tr key={criteria}>
        <td >{criteria}</td>
        {rubricCriteria[criteria].map((value, index) => (
          <td  key={index}>{value}</td>
        ))}
      </tr>
    ));
  };

  return (
    <div>
      <div id="table-to-export" ref={tableRef}>
      <p>Subject: {rubricData.subject}</p>
      <p>School Level:{rubricData.classLevel}</p>
      <p>Assessment: {rubricData.assessment}</p>
      <p>Weightage: {rubricData.grade}%</p>

      <table>
      
      {renderTableHeaders()}
      
      <tbody>
        {renderTableRows()}
      </tbody>
    </table>
    </div>
    {rubricCriteria && <ExportRubric data={tableData} tableRef={tableRef} fileName={rubricData.classLevel+"_"+rubricData.subject+"_"+rubricData.assessment} />}
    
    </div>
    
  );
};

export default CriteriaTable;