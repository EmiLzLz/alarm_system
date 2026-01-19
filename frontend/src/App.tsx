import { useEffect } from "react";
import "./App.css";
import MovementsList from "./components/MovementsList";
import RecentMovement from "./components/RecentMovement";
import { useMovementsStore } from "./store/movementsStore";
import { useSmartPolling } from "./hooks/useSmartPolling";

function App() {
  const fetchMovementsAsync = useMovementsStore(
    (state) => state.fetchMovementsAsync,
  );
  const fetchRecentMovementAsync = useMovementsStore(
    (state) => state.fetchRecentMovementAsync,
  );
  const { forceRefresh } = useSmartPolling({
    fetchFunctions: [fetchMovementsAsync, fetchRecentMovementAsync],
    interval: 15000,
  });

  return (
    <>
      <div className="container">
        <RecentMovement />
        <MovementsList />
      </div>
    </>
  );
}

export default App;
