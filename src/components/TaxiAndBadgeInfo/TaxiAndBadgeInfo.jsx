

import React, { useState } from 'react';
import styles from './TaxiAndBadge.module.css'
import HeroSection from '../Shared/HeroSection';


const TaxiAndBadgeInfo = () => {
  const [driverType, setDriverType] = useState('');
  const [issuedBy, setIssuedBy] = useState('');
  const [badgeNumber, setBadgeNumber] = useState('');

  const handleDriverTypeChange = (event) => {
    setDriverType(event.target.value);
  };

  const handleIssuedByChange = (event) => {
    setIssuedBy(event.target.value);
  };

  const handleBadgeNumberChange = (event) => {
    setBadgeNumber(event.target.value);
  };

  return (
    <div>
    <HeroSection title="Taxi or PH Badge Information"> 
    <div className={styles.taxi}>
      <form>
        <label>
          Driver Type:
          <input
            type="text"
            value={driverType}
            onChange={handleDriverTypeChange}
            placeholder="Enter Driver Type"
            />
        </label>
      </form>

      <form>
        <label>
          Issued By:
          <input
            type="text"
            value={issuedBy}
            onChange={handleIssuedByChange}
            placeholder="Enter Issued By"
            />
        </label>
      </form>

      <form>
        <label>
          Badge Number:
          <input
            type="text"
            value={badgeNumber}
            onChange={handleBadgeNumberChange}
            placeholder="Enter Badge Number"
            />
        </label>
      </form>
    </div>
    </HeroSection>
            </div>
  );
};

export default TaxiAndBadgeInfo;
