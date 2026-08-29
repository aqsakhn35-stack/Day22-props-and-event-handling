function TripBudgetWidget({ count, totalBudget }) {
  return (
    <section className="trip-budget">
      <div className="trip-budget__item">
        <span className="trip-budget__label">Selected</span>
        <strong>{count}</strong>
      </div>

      <div className="trip-budget__item">
        <span className="trip-budget__label">
          Total Estimated Budget
        </span>
        <strong>PKR {totalBudget.toLocaleString()}</strong>
      </div>
    </section>
  );
}

export default TripBudgetWidget;