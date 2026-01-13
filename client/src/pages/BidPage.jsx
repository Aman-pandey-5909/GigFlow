import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../api/api";
import BidCard from "../components/BidCard";

const BidPage = () => {
  const [bids, setBids] = useState([]);
  const [errormsg, setErrormsg] = useState("");
  const { gigid } = useParams();
  const getBids = async () => {
    try {
      const res = await api.get(`/bids/${gigid}`);
      setBids(res.data.bids);
    } catch (error) {
      setErrormsg(
        error.response.data.message || error.message || "Something went wrong"
      );
    }
  };
  useEffect(() => {
    getBids();
  }, []);

  const hire = async(bidid) => {
    try {
        const res = await api.patch(`/bids/${bidid}/hire`);
        getBids();
    } catch (error) {
        setErrormsg(error.response.data.error || error.response.data.message || error.message || "Something went wrong");
    }
  }

  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-2 mb-5">Your Gig's Bids</h1>
      <div className="flex gap-3 w-[70%] mx-auto flex-wrap max-h-[80vh] overflow-auto justif-start">
        {bids.length === 0 && <p className="text-2xl text-center">No bids found</p>}
        {bids.map((bid) => (
          <BidCard key={bid._id} bid={bid} hireHandler={hire}/>
        ))}
        {errormsg && <p>{errormsg}</p>}
      </div>
    </>
  );
};

export default BidPage;
