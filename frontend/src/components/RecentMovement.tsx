import React from "react";
import type { Movement } from "../types/Movement";

type RecentMovementProps = {
  recentMovement: Movement | null;
  loading: boolean;
  error: string | null;
};

function RecentMovement({
  recentMovement,
  loading,
  error,
}: RecentMovementProps) {
  if (loading) {
    return <div>Loading most recent movement detection...</div>;
  }

  if (error) {
    return <div>Failed fetching recent movement...</div>;
  }

  if (!recentMovement) {
    return <div>No recent movement found.</div>;
  }

  const timestampFormat = new Date(recentMovement.createdAt).toLocaleString();

  return (
    <div className="recent-container">
      <h2>RECENT MOVEMENT DETECTED</h2>
      <h3>{recentMovement.event}</h3>
      <div className="content">
        <p className="recent-duration">Duration: {recentMovement.duration}</p>
        <p className="recent-timestamp">{timestampFormat}</p>
      </div>
    </div>
  );
}

export default RecentMovement;
