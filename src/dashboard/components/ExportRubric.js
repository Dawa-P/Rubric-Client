import React from "react";
import { saveAs } from 'file-saver';
import XLSX from "sheetjs-style";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './ExportRubric.css'

const ExportRubric = ({ data,tableRef, fileName }) => {
  console.log("This is data",data)
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data,{skipHeader: true});
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], {type: 'application/octet-stream'});
    saveAs(blob, `${fileName}.xlsx`);
  };

  const exportToPDF = () => {
    const table = tableRef.current;
    const width = table.offsetWidth;
    const height = table.offsetHeight;
  
    html2canvas(table, { width: width, height: height, scrollX: 0, scrollY: 0 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('l', 'pt', [width, height]);
      pdf.addImage(imgData, 'PNG', 0, 0, width, height);
      pdf.save(`${fileName}.pdf`);
    });
  };
   



  return (
    <div className="export-buttons-container">
      <button className="export-button" onClick={exportToExcel}>Export to Excel</button>
      <button className="export-button" onClick={exportToPDF}>Export to PDF</button>
    </div>
    
  );
}

export default ExportRubric;
