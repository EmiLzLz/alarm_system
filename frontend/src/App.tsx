import { useEffect } from "react";
import "./App.css";
import MovementsList from "./components/MovementsList";
import { useMovements } from "./hooks/useMovements";
function App() {
  const {
    movements,
    recentMovement,
    loadingMovements,
    loadingRecentMove,
    fetchMovements,
    fetchRecentMovement,
    errorMovements,
    errorRecentMove,
  } = useMovements();

  useEffect(() => {
    fetchMovements();
    fetchRecentMovement();

    const interval = setInterval(() => {
      fetchMovements();
      fetchRecentMovement();
    }, 5000);

    return () => clearInterval(interval);
  }, [fetchMovements, fetchRecentMovement]);

  return (
    <>
      <div className="container">
        <MovementsList movements={movements} loading={loadingMovements} error={errorMovements} />
      </div>
    </>
  );
}

export default App;
