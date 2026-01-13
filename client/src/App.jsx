import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import GetUser from "./hooks/getUserHook";
import GigPage from "./pages/GigPage";
import YourgigPage from "./pages/YourgigPage";
import CreateBidPage from "./pages/CreateBidPage";
import BidPage from "./pages/BidPage";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <GetUser>
              <HomePage />
            </GetUser>
          }
        />
        <Route
          path="/postgig"
          element={
            <GetUser>
              <GigPage />
            </GetUser>
          }
        />
        <Route
          path="/yourgig"
          element={
            <GetUser>
              <YourgigPage />
            </GetUser>
          }
        />
        <Route
          path="/bid/:gigid"
          element={
            <GetUser>
              <CreateBidPage />
            </GetUser>
          }
        />
        <Route
          path="/:gigid/bids"
          element={
            <GetUser>
              <BidPage />
            </GetUser>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </div>
  );
};

export default App;
