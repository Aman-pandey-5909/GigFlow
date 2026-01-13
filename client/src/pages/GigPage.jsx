import { useState } from "react";
import { useDispatch } from "react-redux";
import { setGig } from "../features/gig/gigSlice";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

const GigPage = () => {
  const dispatch = useDispatch();
  const [errormsg, setErrormsg] = useState("");
  const [gigData, setGigData] = useState({
    title: "",
    description: "",
    budget: 0,
  });

  const navigate = useNavigate();

  const createGig = async (e) => {
    e.preventDefault();
    try {
        // console.log(gigData);
      const res = await api.post("/gigs", { ...gigData, budget: Number(gigData.budget) });
      dispatch(setGig(res.data));
      navigate("/");
    } catch (error) {
        // console.log(error);
      setErrormsg(
        error?.response?.data?.message ||
          error?.message ||
          "Something went wrong"
      );
    }
  };

  return (
    <div className="flex flex-col items-center my-5 gap-3 w-fit mx-auto border px-3 py-2 rounded-lg">
      <h1 className="text-3xl font-bold text-center my-2">Create a Gig</h1>
      <form action="" onSubmit={createGig} className="flex flex-col gap-3">
        <div className=" flex justify-center items-center gap-3">
          <label htmlFor="title">Title: </label>
          <input
            className="px-3 py-1 border rounded-xl"
            type="text"
            name="title"
            id="title"
            onChange={(e) => {
              setGigData({ ...gigData, title: e.target.value });
            }}
            required
          />
        </div>
        <div className=" flex justify-center gap-3">
          <label htmlFor="description">Description: </label>
          <textarea
            className="px-3 py-1 border rounded-xl"
            type="text"
            name="description"
            id="description"
            onChange={(e) => {
              setGigData({ ...gigData, description: e.target.value });
            }}
            cols="30"
            rows="5"
            required
          />
        </div>
        <div className=" flex justify-center items-center gap-3">
          <label htmlFor="budget">Price: </label>
          <input
            className="px-3 py-1 border rounded-xl"
            type="number"
            name="budget"
            id="budget"
            onChange={(e) => {
              setGigData({ ...gigData, budget: e.target.value });
            }}
            required
          />
        </div>
        <button type="submit" className="bg-green-300 px-3 py-1 rounded-md">
          Create Gig
        </button>
      </form>
      {errormsg && <p className="text-red-400">{errormsg}</p>}
    </div>
  );
};

export default GigPage;
