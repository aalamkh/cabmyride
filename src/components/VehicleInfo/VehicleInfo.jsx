// VehicleRegistrationSection.js

import React, { useState} from 'react';
import styles from './Vehicle.module.css'
import HeroSection from '../Shared/HeroSection';


const VehicleInfo = () => {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [model, setModel] = useState('');
  const [passengers, setPassengers] = useState('');
  const [rideType, setRideType] = useState('');
  const [bodyType, setBodyType] = useState('');
  const [selectedOptions, setSelectedOptions] = useState({
    ppeBarrier: false,
    disableAccess: false,
    premiumVehicle: false,
    hackneyCarriage: false,
    pets: false,
    wideCar: false,
  });
  
  const handleCheckboxChange = (option) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [option]: !prevOptions[option],
    }));
  };



  const handleRegistrationNumberChange = (event) => {
    setRegistrationNumber(event.target.value);
  };
  const handleModelChange = (event) => {
    setModel(event.target.value);
  };

  const handlePassengersChange = (event) => {
    setPassengers(event.target.value);
  };

  const handleRideTypeChange = (event) => {
    setRideType(event.target.value);
  };

  const handleBodyTypeChange = (event) => {
    setBodyType(event.target.value);
  };

  

  return ( 
    <div>
     <HeroSection title="Vechile Information">
    <div className={styles.vec}>
      <form>
        <label>
          Registration 
          <input
            type="text"
            value={registrationNumber}
            onChange={handleRegistrationNumberChange}
            placeholder="Enter Registration Number"
            />
        </label>
      </form>
    </div>
      <div className={styles.fill}>
      <form>
        <label>
          Model:
          <input
            type="text"
            value={model}
            onChange={handleModelChange}
            placeholder="Enter Model"
          />
        </label>

        <label>
          Passengers:
          <input
            type="number"
            value={passengers}
            onChange={handlePassengersChange}
            placeholder="Enter Passengers"
          />
        </label>

        <label>
          Ride Type:
          <select value={rideType} onChange={handleRideTypeChange}>
            <option value="">Select Ride Type</option>
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="Hatchback">Hatchback</option>
          </select>
        </label>

        <label>
          Body Type:
          <select value={bodyType} onChange={handleBodyTypeChange}>
            <option value="">Select Body Type</option>
            <option value="Coupe">Coupe</option>
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="Convertible">Convertible</option>
          </select>
        </label>
      </form>
    </div> 

    {/* ---------------- */}

   <div className={styles.checkboxes}>
      <form>
        <label>
          <input
            type="checkbox"
            checked={selectedOptions.ppeBarrier}
            onChange={() => handleCheckboxChange('ppeBarrier')}
          />
          PPE Barrier
        </label>

        <label>
          <input
            type="checkbox"
            checked={selectedOptions.disableAccess}
            onChange={() => handleCheckboxChange('disableAccess')}
          />
          Disable Access
        </label>

        <label>
          <input
            type="checkbox"
            checked={selectedOptions.premiumVehicle}
            onChange={() => handleCheckboxChange('premiumVehicle')}
          />
          Premium Vehicle
        </label>

        <label>
          <input
            type="checkbox"
            checked={selectedOptions.hackneyCarriage}
            onChange={() => handleCheckboxChange('hackneyCarriage')}
          />
          Hackney Carriage
        </label>

        <label>
          <input
            type="checkbox"
            checked={selectedOptions.pets}
            onChange={() => handleCheckboxChange('pets')}
          />
          Pets
        </label>

        <label>
          <input
            type="checkbox"
            checked={selectedOptions.wideCar}
            onChange={() => handleCheckboxChange('wideCar')}
          />
          Wide Car
        </label>
      </form>

   
    </div>

   {/* ---------------------- */}
     <div style={{paddingTop:'40px'}}>
     <form>
        <label>
          Insurance Certificate Number 
          <input
            type="text"
            value={registrationNumber}
            onChange={handleRegistrationNumberChange}
            placeholder="Enter Registration Number"
            />
        </label>
      </form>
     </div>
     
      </HeroSection>
            </div>
  );
};

export default VehicleInfo;
