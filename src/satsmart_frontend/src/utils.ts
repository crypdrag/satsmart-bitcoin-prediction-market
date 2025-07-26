import type { LeaderboardPlayer, NewsArticle, MacroEvent, RiskMetrics, MarketAsset } from './types';

// Constants
export const BITCOIN_PRICE = 96420;
export const SATOSHIS_PER_BTC = 100000000;

// Utility functions
export const convertToUnit = (usdAmount: number, targetUnit: string): string => {
  switch (targetUnit) {
    case 'BTC':
      return (usdAmount / BITCOIN_PRICE).toFixed(8);
    case 'sats':
      return Math.round((usdAmount / BITCOIN_PRICE) * SATOSHIS_PER_BTC).toLocaleString();
    case 'USD':
    default:
      return usdAmount.toFixed(2);
  }
};

export const truncateAddress = (address: string): string => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export const truncatePrincipal = (principal: string): string => {
  return `${principal.slice(0, 5)}...${principal.slice(-5)}`;
};

// Mock data
export const leaderboardPlayers: LeaderboardPlayer[] = [
  { rank: 1, badge: '🥇', username: 'SatoshiMaxi', score: 2450, streak: 'BTC 5/5 🔥' },
  { rank: 2, badge: '🥈', username: 'BitcoinBull', score: 2340, streak: 'BTC 3/3 ⚡' },
  { rank: 3, badge: '🥉', username: 'CryptoKing', score: 2180, streak: 'XAU 2/3 📈' },
  { rank: 4, badge: '🔥', username: 'DiamondHands', score: 1950, streak: 'BTC 4/5 💎' },
  { rank: 5, badge: '⭐', username: 'HODLmaster', score: 1820, streak: 'BTC 1/2 🚀' }
];

export const bitcoinNewsArticles: NewsArticle[] = [
  {
    title: "Bitcoin Mining Difficulty Reaches All-Time High as Hash Rate Soars",
    source: "Bitcoin Magazine",
    timeAgo: "2 days ago"
  },
  {
    title: "Major Corporation Adds 5,000 BTC to Treasury Reserves",
    source: "CoinDesk",
    timeAgo: "4 days ago"
  },
  {
    title: "Lightning Network Capacity Crosses 5,000 BTC Milestone",
    source: "The Block",
    timeAgo: "6 days ago"
  }
];

export const currentMarketData: Record<string, MarketAsset> = {
  btc: { price: 96420, change: 2.1, symbol: "₿" },
  gold: { price: 2650, change: -0.3, symbol: "🪙" },
  sp500: { price: 5845, change: 0.8, symbol: "📈" },
  ethereum: { price: 3720, change: 1.5, symbol: "⟠" }
};

export const macroEvents: MacroEvent[] = [
  {
    date: "Jan 29",
    time: "2:00 PM",
    event: "FOMC Rate Decision",
    impact: "High"
  },
  {
    date: "Jan 30",
    time: "8:30 AM", 
    event: "GDP Growth (Q4)",
    impact: "Medium"
  },
  {
    date: "Feb 1",
    time: "8:30 AM",
    event: "Employment Report",
    impact: "High"
  }
];

export const riskMetrics: RiskMetrics = {
  volatility: "85.2%",
  sharpeRatio: "1.34",
  maxDrawdown: "-73.8%",
  correlation: "0.15",
  var95: "-12.3%",
  betaVsSP: "1.78",
  sortinoRatio: "1.89"
};