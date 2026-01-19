export interface SmartPolling {
  fetchFunctions: (() => Promise<void>)[];
  interval: number;
}
