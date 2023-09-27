import React, { useState } from 'react';
import * as XLSX from 'xlsx';

function FileDragger() {
  const [dragging, setDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [excelData, setExcelData] = useState(null);


  const handleDragOver = (event) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragging(false);

    const file = event.dataTransfer.files[0];
    setSelectedFile(file);

    processExcelFile(file);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    processExcelFile(file);

  };



  const processExcelFile = (file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: 'array' });

      // Acceder a la primera hoja de cálculo
      const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
      // Convertir la hoja de cálculo a un objeto JSON
      const jsonData = XLSX.utils.sheet_to_json(firstSheet);

      setExcelData(jsonData);

      const jsonArray = Object.values(jsonData)
      console.log(jsonArray)
      enviarDato(jsonArray[0])
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <div
      className={`border-dashed border-2 p-4 rounded-lg ${dragging ? 'bg-gray-100' : 'bg-white'}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <h2 className="text-lg font-semibold mb-2">Arrastra y suelta archivo de Excel aqui:</h2>
      <input
        type="file"
        accept=".xlsx, .xls"
        onChange={handleFileChange}
        className="hidden"
        ref={(input) => input && (input.value = '')}
      />
      {selectedFile && (
        <p className="text-gray-600">Selected File: {selectedFile.name}</p>
      )}
      {excelData && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Excel Data:</h3>
          <ul>
            {excelData.map((row, index) => (
              <li key={index}>
                {/* Renderizar cada fila como texto JSON */}
                {JSON.stringify(row)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default FileDragger;
