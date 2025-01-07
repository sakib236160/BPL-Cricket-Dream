import { useState } from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Main from "./components/Main/Main";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Newsletter from "./components/Newsletter";

const App = () => {
  const [coinBalance, setCoinBalance] = useState(0);

  const handleClaimFreeCredit = () => {

    setCoinBalance((prevBalance) => {
      const newBalance = prevBalance + 6000000;

      toast.success("Coin successfully added !", {
        position: "top-center",
      });
      return newBalance;
    });
  };

  return (
    <div>
      <div className="md:container mx-auto">
        {/*------------------------ Navbar section----------------- */}
        <Navbar coinBalance={coinBalance}></Navbar>
        {/*------------------------ Banner section----------------- */}
        <Banner handleClaimFreeCredit={handleClaimFreeCredit}></Banner>
        {/*------------------------ Main section----------------- */}
        <Main coinBalance={coinBalance} setCoinBalance={setCoinBalance}></Main>
      </div>
      {/*------------------------ Newsletter section----------------- */}
      <Newsletter></Newsletter>
      <ToastContainer autoClose={1300} theme="colored" />
    </div>
  );
};

export default App;