import { useSelector } from "react-redux";
import GigCard from "../components/GigCard";
import BidCard from "../components/BidCard";

const YourgigPage = () => {
  const user = useSelector((state) => state.auth.user);
  // console.log(user);
  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-2 mb-5">Your Gigs</h1>
      <div className="flex gap-3 w-[70%] mx-auto flex-wrap max-h-[80vh] overflow-auto justif-start">
            {user?.jobsPosted?.length > 0 ? (
              user.jobsPosted.map((gig) => (
                <GigCard key={gig._id} gig={gig} userid={user._id} username={user.name} />
              ))
            ) : (
              <p className="text-2xl text-center">No gigs found</p>
            )}
          </div>
          <h1 className="text-3xl font-bold text-center mt-2 mb-5">Your Bids</h1>
          <div className="flex gap-3 w-[70%] mx-auto flex-wrap max-h-[80vh] overflow-auto justif-start">
            {user?.bids?.length > 0 ? (
              user.bids.map((bid) => (
                <BidCard key={bid._id} bid={bid} />
              ))
            ) : (
              <p className="text-2xl text-center">No Bids found</p>
          )}
          </div>
    </>
  );
};

export default YourgigPage;
