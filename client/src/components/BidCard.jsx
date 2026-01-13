

const BidCard = ({ bid, hireHandler }) => {
    return (
    <div className="border max-w-75 h-fit rounded-xl px-4 py-2">
      <p className="text-lg font-semibold">{bid.ownerId.name}</p>
      <h1 className="text-md">{bid.message}</h1>
      <div className="flex justify-between my-2">
        <p
          className={bid.status === "open" ? "text-green-600" : "text-red-400"}
        >
          {bid.status === "pending" ? "🟢" : "🔴"}
        </p>
        <button onClick={() => hireHandler(bid._id)} disabled={bid.status !== "pending"} className="bg-green-600 text-white px-2 py-1 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed">
          {bid.status === "accepted" ? "Hired" : (
            bid.status === "pending" ? "Hire" : "Gig Closed"
          )}
        </button>
      </div>
    </div>
  );
};

export default BidCard;
