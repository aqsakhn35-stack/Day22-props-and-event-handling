import "./DestinationCard.css";

function DestinationCard({ image, place, country, budget, status }) {
  const isVisited = status === "visited";

  return (
    <div className="destination-card">
      <div className="destination-card__image-wrap">
        <img
          className="destination-card__image"
          src={image}
          alt={`${place}, ${country}`}
          loading="lazy"
        />
        <span
          className={`destination-card__badge ${
            isVisited ? "destination-card__badge--visited" : "destination-card__badge--planned"
          }`}
        >
          {isVisited ? "Visited" : "Planned"}
        </span>
      </div>

      <div className="destination-card__body">
        <h3 className="destination-card__place">{place}</h3>
        <p className="destination-card__country">{country}</p>
        <p className="destination-card__budget">
          Est. Budget: <span>PKR {budget.toLocaleString()}</span>
        </p>
      </div>
    </div>
  );
}

export default DestinationCard;