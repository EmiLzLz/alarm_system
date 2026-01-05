import { useEffect } from "react";
import "./App.css";
import MovementsList from "./components/MovementsList";
import RecentMovement from "./components/RecentMovement";
import { useMovementsStore } from "./store/movementsStore";
function App() {
  const fetchMovementsAsync = useMovementsStore((state) => state.fetchMovementsAsync)
  const fetchRecentMovementAsync = useMovementsStore((state) => state.fetchRecentMovementAsync)

  useEffect(() => {
    fetchMovementsAsync();
    fetchRecentMovementAsync();

    const interval = setInterval(() => {
      fetchMovementsAsync();
      fetchRecentMovementAsync();
    }, 15000);

    return () => clearInterval(interval);
  }, []);


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
