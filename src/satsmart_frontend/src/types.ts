// Core application types
export type ActiveSection = 'Market' | 'DAO';
export type TierType = 'satoshi' | 'stacker' | 'maxi';

// Market data types
export interface MarketAsset {
  price: number;
  change: number;
  symbol: string;
}

// Player and leaderboard types
export interface LeaderboardPlayer {
  rank: number;
  badge: string;
  username: string;
  score: number;
  streak: string;
}

// News article types
export interface NewsArticle {
  title: string;
  source: string;
  timeAgo: string;
}

// Macro event types
export interface MacroEvent {
  date: string;
  time: string;
  event: string;
  impact: string;
}

// Risk metrics types
export interface RiskMetrics {
  volatility: string;
  sharpeRatio: string;
  maxDrawdown: string;
  correlation: string;
  var95: string;
  betaVsSP: string;
  sortinoRatio: string;
}

// Dispute types for DAO
export interface Dispute {
  id: string;
  title: string;
  description: string;
  category: string;
  status: string;
  votesFor: number;
  votesAgainst: number;
  totalStaked: number;
  timeRemaining: string;
  evidenceUrl: string;
  submitter: string;
  hasUserVoted: boolean;
}