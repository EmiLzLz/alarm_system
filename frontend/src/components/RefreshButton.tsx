import { RefreshCw } from "lucide-react";
import React from "react";

interface RefreshButtonProps {
  forceRefresh: () => void;
}

function RefreshButton({ forceRefresh }: RefreshButtonProps) {
  return (
    <button onClick={forceRefresh} className="refresh-button">
      <RefreshCw size={18} className="refresh-button-icon" /> REFRESH NOTIFICATIONS
    </button>
  );
}

export default RefreshButton;
