import './App.css';
import SignUp from './components/SignUp/SignUp';
import LicenseInfo from './components/LicenseInfo/LicenseInfo'
import TaxiAndBadgeInfo from './components/TaxiAndBadgeInfo/TaxiAndBadgeInfo';
import VehicleInfo from './components/VehicleInfo/VehicleInfo';
import DocAndExpDates from './components/DocAndExp/DocAndExpDates';

function App() {
  return (
    <div className='App'>
      <div style={{
        display: "flex",
        flexDirection: "row",
        gap: "2rem",
        height:"100%"
      }}>
        <div style={{
          borderRight:"1px solid lightgrey",
          paddingLeft:"1rem",
          paddingRight:"1rem",
          width:"50%"
        }}>
          <SignUp />
          <LicenseInfo />
          <TaxiAndBadgeInfo />
          <VehicleInfo />
        </div>
        <div>
          <h1>Documents and Expiry Dates</h1>
          <DocAndExpDates/>
        </div>
      </div>
    </div>

  );
}

export default App;