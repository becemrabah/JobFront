import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/generate';

export const generateCoverLetter = async (jobDescription, cvText) => {
  const formData = new FormData();
  formData.append("job_description", jobDescription);
  formData.append("cv_text", cvText);

  const response = await axios.post(API_URL, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return response.data.cover_letter;
};
