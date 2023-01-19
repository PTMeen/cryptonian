import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePages";
import SingleCoinPage from "./pages/SingleCoinPage";
import AccountPage from "./pages/AccountPage";
import SignInPage from "./pages/SinginPage";
import SingUpPage from "./pages/SignupPage";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coins/:coinId" element={<SingleCoinPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SingUpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
export default App;
