import React from 'react';
import * as XLSX from 'xlsx';

const Button = ({
  color,
  bgColor,
  text,
  borderRadius,
  size,
  data,
  exclassName,
}) => {
  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'exported_data.xlsx');
  };

  return (
    <button
      type='button'
      style={{
        backgroundColor: `rgb(${bgColor.r}, ${bgColor.g}, ${bgColor.b})`,
        color: color,
        borderRadius: borderRadius,
      }}
      className={`text-${size} p-3 hover:drop-shadow-xl ${exclassName} `}
      onClick={exportToExcel}
    >
      {text}
    </button>
  );
};

export default Button;
