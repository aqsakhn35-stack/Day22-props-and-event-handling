import { useState } from "react";
import DestinationCard from "./components/DestinationCard";
import TripBudgetWidget from "./TripBudgetWidget";
import destinations from "./data/destinations";
import "./App.css";

function App() {
  const [selectedIds, setSelectedIds] = useState([]);

  function toggleDestination(id) {
    setSelectedIds((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  }

  const selectedDestinations = destinations.filter((destination) =>
    selectedIds.includes(destination.id)
  );

  const totalBudget = selectedDestinations.reduce(
    (sum, destination) => sum + destination.budget,
    0
  );

  return (
    <div className="app">
      <header className="app__header">
        <h1>WanderList</h1>
        <p>Your next adventure, one card at a time.</p>
      </header>

      <TripBudgetWidget
        count={selectedDestinations.length}
        totalBudget={totalBudget}
      />

      <main className="app__grid">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination.id}
            image={destination.image}
            place={destination.place}
            country={destination.country}
            budget={destination.budget}
            status={destination.status}
            travelNote={destination.travelNote}
            isAdded={selectedIds.includes(destination.id)}
            onToggle={() => toggleDestination(destination.id)}
          />
        ))}
      </main>
    </div>
  );
}

export default App;