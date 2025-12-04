import React from "react";
import type { Movement } from "../types/Movement";

type MovementsListProps = {
  movements: Movement[];
  loading: boolean;
  error: string | null;
};

function MovementsList({ movements, loading, error }: MovementsListProps) {
  if (loading) {
    return <div>Loading notifications...</div>;
  }

  if (error) {
    return <div>Failed fetching movements list...</div>;
  }

  return (
    <div>
      <h3>All movement detections from sensor</h3>
      <div className="movements-container">
        {movements.map((movement) => (
          <div key={movement._id} className="movement-box">
            <h4>{movement.event}</h4>
            <div className="content">
              <p>Duration: {movement.duration}</p>
            </div>
            <div className="timestamp">
              <p>{new Date(movement.createdAt).toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovementsList;
