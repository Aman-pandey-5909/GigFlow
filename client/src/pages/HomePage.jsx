import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import api from "../api/api";
import { setGig } from "../features/gig/gigSlice";
import GigCard from "../components/GigCard";

const HomePage = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const gigs = useSelector((state) => state.gigs.gigs);
  // const [gigs, setGigs] = useState([]);
  const [errormsg, setErrormsg] = useState("");

  const getGigs = async () => {
    try {
      const res = await api.get("/gigs");
      dispatch(setGig(res.data));
    } catch (error) {
      setErrormsg(error.message);
    }
  };
  console.log(gigs);
  useEffect(() => {
    getGigs();
  }, [ ]);
  return (
    <div>
      {user ? (
        <>
          <h1 className="text-3xl font-bold text-center mt-2 mb-5">Welcome {user.name}</h1>
          {errormsg && <p className="text-red-400">{errormsg}</p>}
          <div className="flex gap-3 w-[70%] mx-auto flex-wrap max-h-[80vh] overflow-auto justif-start">
            {gigs?.gigs?.length > 0 ? (
              gigs.gigs.map((gig) => (
                <GigCard key={gig._id} gig={gig} userid={user._id} username={gig.ownerId.name} />
              ))
            ) : (
              <p className="text-2xl text-center">No gigs found</p>
            )}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <h1 className="text-center text-3xl font-bold my-5">
            Welcome to GigFlow
          </h1>
          <h2 className="text-center text-2xl font-bold my-5">
            Find the perfect gig for you
          </h2>
          <button
            onClick={() => {
              window.location.href = "/login";
            }}
            className="hover:underline hover:underline-offset-2 w-fit hover:bg-green-100 px-4 py-2  rounded-2xl font-semibold"
          >
            Login To Continue
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
