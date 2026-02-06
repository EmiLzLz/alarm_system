import { Loader2, AlertCircle, Activity, Clock, Calendar } from "lucide-react";
import { useMovementsStore } from "../store/movementsStore";
import MovementsListSkeleton from "./skeletons/MovementsListSkeleton";

function MovementsList() {
  const movements = useMovementsStore((state) => state.movements);
  const loading = useMovementsStore((state) => state.loadingMovements);
  const error = useMovementsStore((state) => state.errorMovements);

  if (loading) {
    return <MovementsListSkeleton />;
  }

  if (error) {
    return (
      <div className="error-message">
        <AlertCircle className="icon-pulse" size={20} aria-hidden="true" />
        <span>Failed fetching movements list...</span>
      </div>
    );
  }

  return (
    <section className="movements-list-section">
      <header className="movements-header">
        <Activity size={18} className="header-icon" aria-hidden="true" />
        <h3>All movement detections from sensor</h3>
      </header>
      <ul className="movements-container">
        {movements.map((movement) => (
          <li key={movement._id} className="movement-box">
            <h4 className="movement-event">{movement.event}</h4>
            <div className="movement-details">
              <p className="movement-duration">
                <Clock size={14} className="detail-icon" aria-hidden="true" />
                <span>Duration: {movement.duration}</span>
              </p>
              <p className="movement-timestamp">
                <Calendar
                  size={14}
                  className="detail-icon"
                  aria-hidden="true"
                />
                <time dateTime={new Date(movement.createdAt).toISOString()}>
                  {new Date(movement.createdAt).toLocaleString()}
                </time>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MovementsList;
