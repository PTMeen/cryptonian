import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import HomePage from "./pages/HomePages";
import SingleCoinPage from "./pages/SingleCoinPage";
import AccountPage from "./pages/AccountPage";
import SignInPage from "./pages/SinginPage";
import SingUpPage from "./pages/SignupPage";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./pages/ProtectedRoute";

const App = () => {
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true";

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data);
    });
  }, [url]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage coins={coins} />} />
        <Route path="/coins/:coinId" element={<SingleCoinPage />} />
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <AccountPage />
            </ProtectedRoute>
          }
        />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SingUpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;
