import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
console.log("API URL used:", API_URL);
export const generateCoverLetter = async (jobDescription, cvText) => {
  const formData = new FormData();
  formData.append("job_description", jobDescription);
  formData.append("cv_text", cvText);

  const response = await axios.post(`${API_URL}/generate`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return response.data.cover_letter;
};
