import { useEffect } from "react";
import "./App.css";
import MovementsList from "./components/MovementsList";
import { useMovements } from "./hooks/useMovements";
import RecentMovement from "./components/RecentMovement";
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
    }, 15000);

    return () => clearInterval(interval);
  }, []);


  return (
    <>
      <div className="container">
        <RecentMovement recentMovement={recentMovement} loading={loadingRecentMove} error={errorRecentMove}/>
        <MovementsList movements={movements} loading={loadingMovements} error={errorMovements} />
        
      </div>
    </>
  );
}

export default App;
