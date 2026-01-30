function MovementsListSkeleton() {
  // 12 placeholders (3 rows × 4 columns)
  const placeholders = Array.from({ length: 16 });

  return (
    <section
      className="movements-list-section"
      style={{ minHeight: "560px" }}
      aria-busy="true"
      aria-label="Loading movements list"
    >
      <header className="movements-header">
        <div className="skeleton-icon"></div>
        <div className="skeleton-heading"></div>
      </header>
      <ul className="movements-container">
        {placeholders.map((_, index) => (
          <li key={index} className="movement-box skeleton-box">
            <div className="skeleton-title"></div>
            <div className="skeleton-details">
              <div className="skeleton-text"></div>
              <div className="skeleton-text"></div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MovementsListSkeleton;
