
import React, { useState } from 'react';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TestModal from './TestModal';
import './fileUpload.css';

const FileUpload = ({ skills, onSubmit, onChange }) => {
  const [fileName, setFileName] = useState("No Files Selected");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      onChange(e);  // Call the onChange prop to update the parent component's state
    } else {
      setFileName("No Files Selected");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e);  // Call the onSubmit prop to handle form submission
  };

  return (
    <form className="dropzone-box" onSubmit={handleSubmit}>
      <h2>Upload and attach files</h2>
      <p>Attach files to this project</p>
      <div className="dropzone-area">
        <div className="file-upload-icon">
          <FontAwesomeIcon icon={faUpload} />
        </div>
        <p>Click to upload or drag and drop</p>
        <input 
          type="file" 
          accept=".pdf,.doc,.docx" 
          required 
          id="upload-file" 
          name="uploaded-file" 
          onChange={handleFileChange} 
        />
        <p className="message">{fileName}</p>
      </div>
      <div className="dropzone-actions">
        <button type="reset" onClick={() => setFileName("No Files Selected")}>
          Cancel
        </button>
        <button id="submit-button" type="submit">
          Save
        </button>
      </div>
      <TestModal skills={skills} />
    </form>
  );
};

export default FileUpload;
