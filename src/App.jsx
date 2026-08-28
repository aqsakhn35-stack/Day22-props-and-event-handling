import DestinationCard from "./components/DestinationCard";
import destinations from "./data/destinations";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1>WanderList</h1>
        <p>Your next adventure, one card at a time.</p>
      </header>

      <main className="app__grid">
        {destinations.map((dest) => (
          <DestinationCard
            key={dest.id}
            image={dest.image}
            place={dest.place}
            country={dest.country}
            budget={dest.budget}
            status={dest.status}
            travelNote={dest.travelNote}
          />
        ))}
      </main>
    </div>
  );
}

export default App;