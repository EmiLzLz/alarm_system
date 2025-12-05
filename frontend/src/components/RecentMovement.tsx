import {
  Loader2,
  AlertCircle,
  SearchX,
  Activity,
  Clock,
  Calendar,
} from "lucide-react";
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
    return (
      <div className="loading-message">
        <Loader2 className="icon-spin" size={20} />
        <span>Loading most recent movement detection...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-message">
        <AlertCircle className="icon-pulse" size={20} />
        <span>Failed fetching recent movement...</span>
      </div>
    );
  }

  if (!recentMovement) {
    return (
      <div className="notFound-message">
        <SearchX size={20} />
        <span>No recent movement found.</span>
      </div>
    );
  }

  const timestampFormat = new Date(recentMovement.createdAt).toLocaleString();

  return (
    <div className="recent-container">
      <h2>
        <Activity size={16} className="header-icon" />
        RECENT MOVEMENT DETECTED
      </h2>
      <h3>{recentMovement.event}</h3>
      <div className="content">
        <p className="recent-duration">
          <Clock size={16} className="inline-icon" />
          Duration: {recentMovement.duration}
        </p>
        <p className="recent-timestamp">
          <Calendar size={16} className="inline-icon" />
          {timestampFormat}
        </p>
      </div>
    </div>
  );
}

export default RecentMovement;
