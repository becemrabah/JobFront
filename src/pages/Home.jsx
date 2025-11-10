import React, { useState } from "react";
import CoverLetterForm from "../components/CoverLetterForm";
import CoverLetterResult from "../components/CoverLetterResult";

const Home = () => {
  const [result, setResult] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`max-w-2xl mx-auto mt-10 p-4 transition-colors duration-500 ${darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"}`}>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold"> Cover Letter Generator</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
      <CoverLetterForm setResult={setResult} darkMode={darkMode} />
      <CoverLetterResult result={result} darkMode={darkMode} />
    </div>
  );
};

export default Home;
