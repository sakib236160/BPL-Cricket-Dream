import { useState } from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

const App = () => {
  const [coinBalance, setCoinBalance] = useState(0);

  const handleClaimFreeCredit = () => {
    const newBalance = coinBalance + 6000000; 
    setCoinBalance(newBalance); 
    // console.log("New Balance:", newBalance)
  };

  return (
    <div className="md:container mx-auto">
      {/*------------------------ Navbar section----------------- */}
      <Navbar coinBalance={coinBalance}></Navbar>
      {/*------------------------ Banner section----------------- */}
      <Banner handleClaimFreeCredit={handleClaimFreeCredit}></Banner>
      {/*------------------------ Main section----------------- */}
    </div>
  );
};

export default App;