import React from "react";
import './Table.css'
import { useState,useEffect } from "react";
import ExportRubricBySubject from './ExportRubricBySubject';


const SubjectTables = ({ rubricData}) => {

const [tableData, setTableData] = useState([]);

  // Function to render table rows based on rubric data
console.log("This is rubric data",rubricData)

  


  const renderTables = () => {
    if (!rubricData) {
      return <div>Select Assessment, subject ...</div>;
    }

    return Object.keys(rubricData).map((assessment) => (
        <div key={assessment}>
            <p>Assessment: {rubricData[assessment].assessment}</p>
            <p>Weightage: {rubricData[assessment].grade}%</p>
            <p>cirteria: {Object.values(rubricData[assessment].criteria)[0].length}</p>

            <table>
                <thead>
                  <tr>
                    <th rowSpan="2">Criteria</th>
                    <th colSpan={Object.values(rubricData[assessment].criteria)[0].length}>Rating</th>

                  </tr>
                  <tr>
                    {/* Generate table headers based on the length of the first criteria */}
                    {Array.from({ length: Object.values(rubricData[assessment].criteria)[0].length }, (_, index) => (
                      <th key={index}>{Object.values(rubricData[assessment].criteria)[0].length - index}</th>
                    ))}
                  </tr>
          
                </thead>
                
                <tbody>
                    {Object.keys(rubricData[assessment].criteria).map((eachcriteria,index) => (
                        <tr key={index}>
                            <td>{eachcriteria}</td>

                            {rubricData[assessment].criteria[eachcriteria].map((value, subIndex) => (
                            <td key={subIndex}>{value}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
      
    ));
  };

  return (
    <div>
        <p>{rubricData ? "The assessment for " + rubricData[0].subject +  " subject of "+rubricData[0].classLevel+" school level are":"Need to choose the value"}: </p>
        {renderTables()}
        {rubricData && <ExportRubricBySubject data={rubricData}/>}

    
    </div>
    
  );
};

export default SubjectTables;