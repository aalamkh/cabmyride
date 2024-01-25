import React, { useState } from 'react';
import ViewAcc from './ViewAcc'
import styles from './SignUp.module.css'
import HeroSection from '../Shared/HeroSection';
import InputField from '../Shared/InputField';

function SignUp() {
  const [input1Value, setInput1Value] = useState('');
  const [input2Value, setInput2Value] = useState('');
  const [input3Value, setInput3Value] = useState('');

  const handleInput1Change = (event) => {
    setInput1Value(event.target.value);
  };

  const handleInput2Change = (event) => {
    const numericValue = event.target.value.replace(/\D/g, '');
    setInput2Value(numericValue);
  };
  const countryCodes = [
    { code: '+1', label: 'United States' },
    { code: '+44', label: 'United Kingdom' },
    { code: '+91', label: 'India' },

  ];
  const handleInput3Change = (event) => {
    setInput3Value(event.target.value);
  };

  return (
      
      <HeroSection title="Signup a driver">

        {/* First Input */}
        <div className={styles.sign}>
          {/* <label>
            Enter Full Name
            <input type="text" value={input1Value} onChange={handleInput1Change} />
          </label> */}
          <InputField label="Enter Full Name"  value={input1Value} setValue={setInput1Value}/>
          {/* Second Input */}
          <InputField label="Enter Contact Number" value={input2Value} setValue={setInput2Value}/>

          {/* Third Input */}
          <InputField label="Enter Email Address" required={true}  type='email' value={input3Value} setValue={setInput3Value}/>
        </div>
        <ViewAcc />
    
        </HeroSection >
   
    
  );
}

export default SignUp;
