import React, { useState } from 'react';
import styles from './DocAndExp.module.css'

const DocAndExpDates = (props) => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [expiryDate, setExpiryDate] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setUploadedFile(file);

    // Simulate fetching expiry date based on the uploaded document
    // Replace with real logic to extract expiry date from the document
    const simulatedExpiryDate = calculateExpiryDate();
    setExpiryDate(simulatedExpiryDate);
  };

  const calculateExpiryDate = () => {
    // Simulated logic to calculate expiry date
    const currentDate = new Date();
    const expiryDate = new Date(currentDate.getFullYear() + 1, currentDate.getMonth(), currentDate.getDate());
    return expiryDate;
  };

  const calculateDaysLeft = () => {
    if (!expiryDate) return null;

    const currentDate = new Date();
    const timeDifference = expiryDate.getTime() - currentDate.getTime();
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return daysLeft >= 0 ? daysLeft : null;
  };

  const handleViewFile = () => {
    // Simulate opening the uploaded file
    // Replace with real logic to view the document
    alert('Viewing the document: ' + uploadedFile.name);
  };
 const submitClick = ()=>{
  alert ("Succussfully File is Submitted " + uploadedFile.name)
 }
  return (
    <div className={styles.document}>
      <label>
        <input type="file" onChange={handleFileChange} />
      </label>
      {expiryDate && (
        <div className="document-info">
          <p>Expiry Date: {expiryDate.toDateString()}</p>
          <p>Days Left for Expiry: {calculateDaysLeft()}</p>
          <button onClick={handleViewFile}>View File</button>
        </div>
      )}
        
    
     
     
      <button onClick={submitClick}>Submit</button>
     
    </div>
  );
};

export default DocAndExpDates;
