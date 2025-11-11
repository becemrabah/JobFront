import React, { useState } from "react";
const API_URL = process.env.REACT_APP_API_URL;
const CoverLetterForm = ({ setResult, darkMode }) => {
  const [jobDescription, setJobDescription] = useState("");
  const [cvText, setCvText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("job_description", jobDescription);
      formData.append("cv_text", cvText);

      const response = await fetch(`${API_URL}/generate`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error(`Error ${response.status}`);

      const data = await response.json();
      setResult(data.cover_letter);
    } catch (err) {
      console.error(err);
      setResult("Erreur lors de la génération de la lettre.");
    } finally {
      setLoading(false);
    }
  };

  const inputClasses = darkMode
    ? "border border-gray-700 bg-gray-800 text-gray-100 p-2 rounded placeholder-gray-400 transition-colors duration-500"
    : "border border-gray-300 bg-white text-gray-900 p-2 rounded placeholder-gray-500 transition-colors duration-500";

  const buttonClasses = darkMode
    ? "bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:opacity-50 transition-colors duration-500"
    : "bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:opacity-50 transition-colors duration-500";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <textarea
        placeholder="Job description..."
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        className={inputClasses}
        required
      />
      <textarea
        placeholder="Your CV..."
        value={cvText}
        onChange={(e) => setCvText(e.target.value)}
        className={inputClasses}
        required
      />
      <button type="submit" disabled={loading} className={buttonClasses}>
        {loading ? "Generating..." : "Generate Cover Letter"}
      </button>
    </form>
  );
};

export default CoverLetterForm;
