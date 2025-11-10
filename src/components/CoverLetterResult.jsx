import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf";

const CoverLetterResult = ({ result, darkMode }) => {
  const [editableText, setEditableText] = useState(result || "");

  useEffect(() => {
    setEditableText(result || "");
  }, [result]);

  if (!result) return null;

  const cleanText = (text) => text.replace(/[^\x00-\x7F]/g, "");

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    const finalText = cleanText(editableText);
    const lines = doc.splitTextToSize(finalText, 180);
    doc.text(lines, 15, 20);
    doc.save("cover_letter.pdf");
  };

  return (
    <div
      className={`mt-4 p-3 rounded whitespace-pre-wrap transition-colors duration-500 ${
        darkMode
          ? "bg-gray-800 text-gray-100 border border-gray-700"
          : "bg-gray-50 text-gray-900 border border-gray-300"
      }`}
    >
      <textarea
        value={editableText}
        onChange={(e) => setEditableText(e.target.value)}
        className={`w-full h-[400px] p-3 rounded border resize-y focus:outline-none transition-colors duration-300 ${
          darkMode
            ? "bg-gray-900 text-gray-100 border-gray-700 focus:border-blue-500"
            : "bg-white text-gray-900 border-gray-300 focus:border-blue-500"
        }`}
      />

      <button
        onClick={handleDownloadPDF}
        className={`mt-4 px-4 py-2 rounded font-medium transition ${
          darkMode
            ? "bg-blue-600 hover:bg-blue-700 text-white"
            : "bg-blue-500 hover:bg-blue-600 text-white"
        }`}
      >
        Download as PDF
      </button>
    </div>
  );
};

export default CoverLetterResult;
