import {
  AlertCircle,
  SearchX,
  Activity,
  Clock,
  Calendar,
} from "lucide-react";
import { useMovementsStore } from "../store/movementsStore";
import RecentMovementSkeleton from "./skeletons/RecentMovementSkeleton";

function RecentMovement() {
  const recentMovement = useMovementsStore((state) => state.recentMovement);
  const loading = useMovementsStore((state) => state.loadingRecentMove);
  const error = useMovementsStore((state) => state.errorRecentMove);

  if (loading) {
    return <RecentMovementSkeleton />;
  }

  if (error) {
    return (
      <div className="error-message">
        <AlertCircle className="icon-pulse" size={20} aria-hidden="true" />
        <span>Failed fetching recent movement...</span>
      </div>
    );
  }

  if (!recentMovement) {
    return (
      <div className="notFound-message">
        <SearchX size={20} aria-hidden="true" />
        <span>No recent movement found.</span>
      </div>
    );
  }

  const timestampFormat = new Date(recentMovement.createdAt).toLocaleString();

  return (
    <section className="recent-container">
      <h2>
        <Activity size={16} className="header-icon" aria-hidden="true" />
        Recent Movement Detected
      </h2>
      <h3>{recentMovement.event}</h3>
      <div className="content">
        <p className="recent-duration">
          <Clock size={16} className="inline-icon" aria-hidden="true" />
          Duration: {recentMovement.duration}
        </p>
        <time
          className="recent-timestamp"
          dateTime={new Date(recentMovement.createdAt).toISOString()}
        >
          <Calendar size={16} className="inline-icon" aria-hidden="true" />
          {timestampFormat}
        </time>
      </div>
    </section>
  );
}

export default RecentMovement;
