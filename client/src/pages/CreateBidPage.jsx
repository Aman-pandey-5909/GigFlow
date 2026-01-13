import React from "react";
import { useParams } from "react-router-dom";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

const CreateBidPage = () => {
  const [errormsg, setErrormsg] = React.useState("");
  const [bidmsg, setBidmsg] = React.useState("");
  const { gigid } = useParams();
  const navigate = useNavigate();
  const bid = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post(`/bids/${gigid}` , { message: bidmsg });
      window.location.href = "/"
    } catch (error) {
      // console.log(error);
      setErrormsg(error.response.data.message || error.message);
    }
  };
  return (
    <main className="flex flex-col items-center my-5 gap-3 w-fit mx-auto border px-3 py-2 rounded-lg">
      <h1 className="text-3xl font-bold">Bid a Gig</h1>
      <form action="" onSubmit={bid} className="flex flex-col gap-3">
        <div className="flex gap-3">
          <label htmlFor="message" className="text-xl font-semibold">
            Message:{" "}
          </label>
          <textarea
            className="px-3 py-1 border rounded-xl"
            name="message"
            id="message"
            cols="50"
            rows="5"
            onChange={(e) => setBidmsg(e.target.value)}
            required
          ></textarea>
        </div>

        <button type="submit" className="bg-green-300 px-3 py-1 rounded-md">
          Bid
        </button>
        <p className="text-red-400">{errormsg}</p>
      </form>
    </main>
  );
};

export default CreateBidPage;
