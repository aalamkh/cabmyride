import React, { useState } from 'react';
import styles from './ViewAcc.module.css'
import HeroSection from '../Shared/HeroSection';

function ViewAcc() {
  const [accountingRef, setAccountingRef] = useState('');
  const [nominalCode, setNominalCode] = useState('');
  const [callSign, setCallSign] = useState('');
  const [commission, setCommission] = useState('');
  const [weeklyCharge, setWeeklyCharge] = useState('');
  const [driverGroup, setDriverGroup] = useState('');
  const [HomeAddress, setHomeAddress] = useState('');

  const handleAccountingRefChange = (event) => {
    setAccountingRef(event.target.value);
  };
  const data = [{
    inputType: "text",
    onChange: () => { },
    value: ""
  },
  {
    inputType: "Email",
    onChange: () => { },
    value: ""
  },
  {
    inputType: "number",
    onChange: () => { },
    value: ""
  }
  ]
  const handleNominalCodeChange = (event) => {
    setNominalCode(event.target.value);
  };

  const handleCallSignChange = (event) => {
    setCallSign(event.target.value);
  };

  const handleCommissionChange = (event) => {
    setCommission(event.target.value);
  };

  const handleWeeklyChargeChange = (event) => {
    const week = event.target.value.replace(/\D/g, '');
    setWeeklyCharge(week);
  };

  const handleDriverGroupChange = (event) => {
    setDriverGroup(event.target.value);
  };
  const handleHomeAdressChange = (event) => {
    setHomeAddress(event.target.value);
  };

  return (
   <>
     View Account
      <div className={styles.view}>
        {/* Accounting Reference */}
        <label>
          Accounting Ref
          <input
            type="text"
            value={accountingRef}
            onChange={handleAccountingRefChange}
            placeholder="Enter Accounting Ref"
            />
        </label>

        {/* Nominal Code */}
        <label>
          Nominal Code
          <input
            type="text"
            value={nominalCode}
            onChange={handleNominalCodeChange}
            placeholder="Enter Nominal Code"
            />
        </label>

        {/* Call Sign */}
        <label>
          Call Sign
          <input
            type="text"
            value={callSign}
            onChange={handleCallSignChange}
            placeholder="Enter Call Sign"
            />
        </label>

        {/* Commission */}
        <label>
          Commission
          <input
            type="text"
            value={commission}
            onChange={handleCommissionChange}
            placeholder="Enter Commission"
            pattern="[0-9]+(\.[0-9]{1,2})?%"  // Accepts decimal numbers with optional percentage sign
            />
        </label>

        {/* Weekly Charge */}
        <label>
          Weekly Charge
          <input
            type="text"
            value={weeklyCharge}
            onChange={handleWeeklyChargeChange}
            placeholder="Enter Weekly Charge"
            pattern="£[0-9]+(\.[0-9]{2})?"
            />

        </label>

        {/* Driver Group */}
        <label>
          Driver Group
          <input
            type="text"
            value={driverGroup}
            onChange={handleDriverGroupChange}
            placeholder="Select all that apply"
            />
        </label>
      </div>
   
      {/* Home Address */}
      <label className={styles.home}>
        Home Address
        <input
          type="text"
          value={HomeAddress}
          onChange={handleHomeAdressChange}
          
          />
      </label>
      
          </>

  );
}

export default ViewAcc;
