function RecentMovementSkeleton() {
  return (
    <div
      className="recent-container skeleton-container"
      style={{ minHeight: "136px" }}
      aria-busy="true"
      aria-label="Loading recent movement"
    >
      <div className="skeleton-header"></div>
      <div className="skeleton-title"></div>
      <div className="skeleton-details">
        <div className="skeleton-text"></div>
        <div className="skeleton-text"></div>
      </div>
    </div>
  );
}

export default RecentMovementSkeleton;
