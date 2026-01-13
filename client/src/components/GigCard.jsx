import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const GigCard = ({ gig, userid, username }) => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.user);
    const bidplaced = user?.bids?.find((bid) => bid.gigId === gig._id);
  return (
    <div className="border max-w-75 h-fit rounded-xl px-4 py-2">
      <p className="text-lg font-semibold">{username}</p>
      <h1 className="text-md">{gig.title}</h1>
      <p className="text-md">{gig.description}</p>
      <div className="flex justify-between">
        <p>{gig.budget}</p>
        <p
          className={gig.status === "open" ? "text-green-600" : "text-red-400"}
        >
          {gig.status === "open" ? "🟢" : "🔴"}
        </p>
      </div>
      {userid === gig.ownerId._id || userid === gig.ownerId ? (
        <p onClick={() => navigate(`/${gig._id}/bids`)} className="text-red-400 cursor-pointer hover:scale-105">Check Bids</p>
      ) : (
        <button onClick={() => navigate(`/bid/${gig._id}`)} disabled={bidplaced} className="bg-green-600 text-white px-2 py-1 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed">
          {gig.freelancerId === userid ? "You are hired" : (
            gig.status === "open" ? "Bid" : "Gig Closed"
          )}
        </button>
      )}
    </div>
  );
};

export default GigCard;
