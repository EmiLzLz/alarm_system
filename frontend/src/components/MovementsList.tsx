import React from "react";
import { Loader2, AlertCircle, Activity, Clock, Calendar } from "lucide-react";
import type { Movement } from "../types/Movement";

type MovementsListProps = {
  movements: Movement[];
  loading: boolean;
  error: string | null;
};

function MovementsList({ movements, loading, error }: MovementsListProps) {
  if (loading) {
    return (
      <div className="loading-message">
        <Loader2 className="icon-spin" size={20} />
        <span>Loading notifications...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-message">
        <AlertCircle className="icon-pulse" size={20} />
        <span>Failed fetching movements list...</span>
      </div>
    );
  }

  return (
    <section className="movements-list-section">
      <header className="movements-header">
        <Activity size={18} className="header-icon" />
        <h3>All movement detections from sensor</h3>
      </header>
      <ul className="movements-container">
        {movements.map((movement) => (
          <li key={movement._id} className="movement-box">
            <h4 className="movement-event">{movement.event}</h4>
            <div className="movement-details">
              <p className="movement-duration">
                <Clock size={14} className="detail-icon" />
                <span>Duration: {movement.duration}</span>
              </p>
              <p className="movement-timestamp">
                <Calendar size={14} className="detail-icon" />
                <span>{new Date(movement.createdAt).toLocaleString()}</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MovementsList;