import { useState } from "react";
import "./DestinationCard.css";

function DestinationCard({
  image,
  place,
  country,
  budget,
  status,
  travelNote,
}) {
  const [isAdded, setIsAdded] = useState(false);
  const [showNote, setShowNote] = useState(false);

  const isVisited = status === "visited";

  const handleAddToBucketList = () => {
    setIsAdded(!isAdded);
  };

  return (
    <div
      className="destination-card"
      onMouseEnter={() => setShowNote(true)}
      onMouseLeave={() => setShowNote(false)}
    >
      <div className="destination-card__image-wrap">
        <img
          className="destination-card__image"
          src={image}
          alt={`${place}, ${country}`}
          loading="lazy"
        />

        <span
          className={`destination-card__badge ${
            isVisited
              ? "destination-card__badge--visited"
              : "destination-card__badge--planned"
          }`}
        >
          {isVisited ? "Visited" : "Planned"}
        </span>

        {showNote && (
          <div className="destination-card__note">
            💡 {travelNote}
          </div>
        )}
      </div>

      <div className="destination-card__body">
        <h3 className="destination-card__place">{place}</h3>

        <p className="destination-card__country">
          {country}
        </p>

        <p className="destination-card__budget">
          Est. Budget: <span>PKR {budget.toLocaleString()}</span>
        </p>

        <button
          className="destination-card__button"
          onClick={handleAddToBucketList}
        >
          {isAdded ? "✓ Added to Bucket List" : "Add to Bucket List"}
        </button>
      </div>
    </div>
  );
}

export default DestinationCard;