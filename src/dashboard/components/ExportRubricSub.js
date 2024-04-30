import React from "react";
import { saveAs } from 'file-saver';
import XLSX from "sheetjs-style";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
// import './ExportRubric.css'

const ExportRubricSub = ({ data, tableRef,fileName }) => {
  const exportToExcel = () => {
    const workbook = XLSX.utils.book_new();

    // Iterate over each category
    for (const category in data) {
      if (data.hasOwnProperty(category)) {
        const subcategoryData = data[category];
        const worksheet = XLSX.utils.aoa_to_sheet([
          ["Criteria",4,3,2,1], // Add category as the header row
          ...Object.entries(subcategoryData).map(([criteria, values]) => [criteria, ...values])
        ]);

        // Add worksheet to the workbook with the category name
        XLSX.utils.book_append_sheet(workbook, worksheet, category);
      }
    }

    // Save the workbook as an Excel file
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], {type: 'application/octet-stream'});
    saveAs(blob, `${fileName}.xlsx`);
  };

  const exportToPDF = () => {
    const divs = document.querySelectorAll('.table-container');
    const table = tableRef.current;
    const width = table.offsetWidth;
    const height = table.offsetHeight;
    const pdf = new jsPDF('l', 'pt', [width, height]);

    divs.forEach((div, index) => {
        const table = div.querySelector('table');
        if (table) {
            // Apply inline styles directly to the table elements
            table.style.width = 'auto';
            table.style.borderCollapse = 'collapse';
            table.style.border = '1px solid #ddd';
            // Add more inline styles as needed

            html2canvas(div).then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                
                if (index > 0) {
                    pdf.addPage();
                }
                pdf.addImage(imgData, 'PNG', 0, 0,width, height);
                
                if (index === divs.length - 1) {
                    pdf.save(`${fileName}.pdf`);
                }
            });
        }
    });
    
  };

  return (
    // <button onClick={exportToExcel}>Export to Excel</button>
    <div className="export-buttons-container">
      <button className="export-button" onClick={exportToExcel}>Export to Excel</button>
      <button className="export-button" onClick={exportToPDF}>Export to PDF</button>
    </div>
  );
};

export default ExportRubricSub;
