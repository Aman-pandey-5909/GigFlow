import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { setGig } from "../features/gig/gigSlice";
import api from "../api/api";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const searchHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await api.get(`/gigs?search=${search}`);
      dispatch(setGig(res.data));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <nav className="flex justify-between px-5 py-2 items-center border-b bg-teal-100">
      <h1
        onClick={() => {
          navigate("/");
        }}
        className="text-green-700 cursor-pointer font-bold text-2xl"
      >
        GigFlow
      </h1>
      {user && (
        <>
          <div className="px-2 py-1 border bg-gray-100 rounded-md">
            <form action="" onSubmit={searchHandler}>
              <input
                className="outline-none px-1"
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                placeholder="search..."
                required
              />
              <button className="px-2 hover:scale-110" type="submit">🔎</button>
            </form>
          </div>
          <div>
            <button
              onClick={() => {
                navigate("/postgig");
              }}
              className="hover:underline hover:underline-offset-2 hover:bg-green-100 px-4 py-2 rounded-2xl font-semibold"
            >
              Post a Gig
            </button>
            <button
              onClick={() => {
                navigate("/yourgig");
              }}
              className="hover:underline hover:underline-offset-2 hover:bg-green-100 px-4 py-2 rounded-2xl font-semibold"
            >
              Your Gigs
            </button>
          </div>
        </>
      )}
      {!user && (
        <button
          onClick={() => {
            navigate("/login");
          }}
          className="hover:underline hover:underline-offset-2 hover:bg-green-100 px-4 py-2 rounded-2xl font-semibold"
        >
          Login
        </button>
      )}
    </nav>
  );
};

export default Navbar;
