import React, { useState } from 'react';
import styles from './License.module.css'
import HeroSection from '../Shared/HeroSection';

const LicenseInfo = () => {
  const [licenseNumber, setLicenseNumber] = useState('');
  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    setLicenseNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const simulatedData = { 
      gender: 'Male', 
      address: '123 Street, city',
      status: 'Valid',
      DOB:"1986-5-15"
    };

    setResult(simulatedData);
  };

  return (
    <HeroSection title="License Information">
   
    <div className={styles.container} >
      <form onSubmit={handleSubmit}>
        <label>
         DVLA License
          <input
            type="text"
            value={licenseNumber}
            onChange={handleInputChange}
            placeholder="Enter DVLA License Number"
            />
        </label>
        <button type="submit">Check Information</button>
      </form>

      {result && (
        <div>
          <h2>License Information</h2>
          <p>Gender: {result.gender}</p>
          <p>Address: {result.address}</p>
          <p>Status: {result.status}</p>
          <p>DOB: {result.DOB}</p>
        </div>
      )}
    </div>
    </HeroSection>
  );
};

export default LicenseInfo;
