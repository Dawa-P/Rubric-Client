import React from "react";
import { saveAs } from 'file-saver';
import XLSX from "sheetjs-style";
import './ExportRubric.css'


const ExportRubricBySubject = ({ data}) => {

  const exportToExcel = () => {

    const workbook = XLSX.utils.book_new();
    let fileName = "";

    // Iterate over each category
    for (const category in data) {
      if (data.hasOwnProperty(category)) {
        const assessment = data[category].assessment
        fileName = "Rubric for " + data[category].subject;
        console.log(assessment)
        const subcategoryData = data[category].criteria;
        const headingMx = Object.values(data[category].criteria)[0].length
        const headingArr = ["Criteria"];

        for (let i = headingMx; i > 0; i--) {
          headingArr.push(i);
      }
        
        console.log("subcat is ",subcategoryData)
        const worksheet = XLSX.utils.aoa_to_sheet([
          headingArr, // Add category as the header row
          ...Object.entries(subcategoryData).map(([criteria, values]) => [criteria, ...values])
        ]);

        // Add worksheet to the workbook with the category name
        XLSX.utils.book_append_sheet(workbook, worksheet, assessment);
      }
    }

    // Save the workbook as an Excel file
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], {type: 'application/octet-stream'});
    saveAs(blob, `${fileName}.xlsx`);
  };

  return (
    <button className="subject-export-button" onClick={exportToExcel}>Export to Excel</button>
  );
};

export default ExportRubricBySubject;
