import React from 'react';
import type { TierType } from '../types';
import { 
  leaderboardPlayers, 
  bitcoinNewsArticles, 
  macroEvents, 
  riskMetrics, 
  currentMarketData 
} from '../utils';
import { ActiveBlockCard } from '../components';

interface MarketPageProps {
  currentTier: TierType;
  blockProgress: number;
  showExplosion: boolean;
  onBetClick: (betType: string, betSide: string) => void;
  onTooltipToggle: (tooltipId: string) => void;
  isConnected: boolean;
}

export function MarketPage({ 
  currentTier, 
  blockProgress, 
  showExplosion, 
  onBetClick, 
  onTooltipToggle,
  isConnected
}: MarketPageProps) {
  
  const renderBetButton = (onClick: () => void, children: React.ReactNode, className: string = "") => {
    if (!isConnected) {
      return (
        <div className="relative group">
          <button 
            onClick={onClick}
            className={`${className} relative`}
          >
            {children}
          </button>
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50 border border-orange-500/30">
            Connect Bitcoin Wallet
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-800"></div>
          </div>
        </div>
      );
    }
    return (
      <button onClick={onClick} className={className}>
        {children}
      </button>
    );
  };
  
  const renderSatoshiTier = () => (
    <>
      {/* Main Question Card */}
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] group">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <h2 className="text-white text-3xl font-bold">Who will win the next block?</h2>
            <button
              onClick={() => onTooltipToggle('block?')}
              className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold hover:bg-orange-600 transition-colors"
            >
              ?
            </button>
          </div>
          
          <div className="flex items-center justify-center space-x-8">
            <div className="text-center group-hover:animate-bounce">
              <div className="text-8xl mb-4 text-orange-400">₿</div>
              <span className="text-orange-400 text-2xl font-bold">BTC</span>
            </div>
            
            <div className="text-6xl text-white font-bold">vs</div>
            
            <div className="text-center group-hover:animate-bounce" style={{ animationDelay: '0.2s' }}>
              <div className="text-8xl mb-4">🪙</div>
              <span className="text-yellow-400 text-2xl font-bold">GOLD</span>
            </div>
          </div>
        </div>
      </div>

      {/* Betting Card */}
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <h3 className="text-white text-2xl font-bold">Will BTC beat XAU next block?</h3>
            <button
              onClick={() => onTooltipToggle('xau-tooltip')}
              className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold hover:bg-orange-600 transition-colors"
            >
              ?
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <button 
              onClick={() => onBetClick('btc-vs-gold', 'yes')}
              className="px-8 py-4 bg-green-600 hover:bg-green-500 border-2 border-green-600 text-white font-bold text-xl rounded-xl transition-all duration-300 transform hover:scale-110 hover:brightness-125"
            >
              YES
            </button>
            <button 
              onClick={() => onBetClick('btc-vs-gold', 'no')}
              className="px-8 py-4 bg-red-600 hover:bg-red-500 border-2 border-red-600 text-white font-bold text-xl rounded-xl transition-all duration-300 transform hover:scale-110 hover:brightness-125"
            >
              NO
            </button>
          </div>
        </div>
      </div>

      {/* Prediction Card */}
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]">
        <div className="text-center">
          <div className="text-6xl mb-4">🔮</div>
          <h3 className="text-white text-2xl font-bold mb-2">62% say BTC wins</h3>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-gray-300 text-sm">Based on current betting data</span>
            <button
              onClick={() => onTooltipToggle('data-tooltip')}
              className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold hover:bg-orange-600 transition-colors"
            >
              ?
            </button>
          </div>
        </div>
      </div>

      <ActiveBlockCard tier="satoshi" progress={blockProgress} showExplosion={showExplosion} />

      {/* Result Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]">
          <div className="bg-green-600 p-4">
            <h3 className="text-white text-lg font-bold text-center">Latest Finalized Block</h3>
            <p className="text-green-100 text-base text-center font-semibold">#873244 - BTC WINS! <span className="text-orange-400">₿</span></p>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <span className="text-4xl text-orange-400">₿</span>
                  </div>
                  <span className="text-white font-semibold text-lg">Bitcoin</span>
                </div>
                <div className="text-right">
                  <div className="text-white font-bold">$96,420</div>
                  <div className="text-green-400 text-sm">+2.1%</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <span className="text-4xl">🪙</span>
                  </div>
                  <span className="text-white font-semibold text-lg">Gold (XAU)</span>
                </div>
                <div className="text-right">
                  <div className="text-white font-bold">$2,650</div>
                  <div className="text-red-400 text-sm">-0.3%</div>
                </div>
              </div>
              <div className="bg-green-900/30 rounded-lg p-3 text-center">
                <span className="text-green-400 font-bold">BTC outperformed by +2.4%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]">
          <div className="bg-gray-700 p-4">
            <h3 className="text-white text-lg font-bold text-center">Previous Finalized Block</h3>
            <p className="text-gray-300 text-base text-center font-semibold">#873243 - XAU WINS 🪙</p>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <span className="text-4xl text-orange-400">₿</span>
                  </div>
                  <span className="text-white font-semibold text-lg">Bitcoin</span>
                </div>
                <div className="text-right">
                  <div className="text-white font-bold">$95,180</div>
                  <div className="text-red-400 text-sm">-1.8%</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <span className="text-4xl">🪙</span>
                  </div>
                  <span className="text-white font-semibold text-lg">Gold (XAU)</span>
                </div>
                <div className="text-right">
                  <div className="text-white font-bold">$2,685</div>
                  <div className="text-green-400 text-sm">+1.2%</div>
                </div>
              </div>
              <div className="bg-red-900/30 rounded-lg p-3 text-center">
                <span className="text-red-400 font-bold">XAU outperformed by +3.0%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const renderStackerTier = () => (
    <>
      {/* Hero Section */}
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]">
        <div className="text-center">
          <h2 className="text-white text-4xl font-bold mb-8">Multi-Asset Battle Royale</h2>
          <div className="flex items-center justify-center space-x-4">
            <div className="text-center">
              <div className="text-6xl mb-2 animate-bounce text-orange-400">₿</div>
              <span className="text-white font-bold">BTC</span>
            </div>
            <div className="text-white text-3xl font-bold">vs</div>
            <div className="text-center">
              <div className="text-6xl mb-2 animate-bounce" style={{ animationDelay: '0.1s' }}>🪙</div>
              <span className="text-white font-bold">GOLD</span>
            </div>
            <div className="text-white text-3xl font-bold">vs</div>
            <div className="text-center">
              <div className="text-6xl mb-2 animate-bounce" style={{ animationDelay: '0.2s' }}>📈</div>
              <div className="flex items-center justify-center space-x-1">
                <span className="text-white font-bold">S&P 500</span>
                <button
                  onClick={() => onTooltipToggle('sp500-tooltip')}
                  className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold hover:bg-orange-600 transition-colors"
                >
                  ?
                </button>
              </div>
            </div>
            <div className="text-white text-3xl font-bold">vs</div>
            <div className="text-center">
              <div className="text-6xl mb-2 animate-bounce" style={{ animationDelay: '0.3s' }}>⟠</div>
              <span className="text-white font-bold">ETH</span>
            </div>
          </div>
        </div>
      </div>

      {/* Asset Grid */}
      <div className="grid grid-cols-4 gap-6">
        {Object.entries(currentMarketData).slice(0, 4).map(([key, asset]) => {
          const displayName = key === 'ethereum' ? 'ETH' : 
                             key === 'sp500' ? 'S&P 500' : 
                             key.toUpperCase();
          
          const buttonColor = key === 'btc' ? 'bg-orange-600 hover:bg-orange-500 border-orange-600' :
                             key === 'gold' ? 'bg-yellow-600 hover:bg-yellow-500 border-yellow-600' :
                             key === 'sp500' ? 'bg-blue-600 hover:bg-blue-500 border-blue-600' :
                             'bg-purple-600 hover:bg-purple-500 border-purple-600'; // ethereum
          
          return (
            <div key={key} className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] group">
              <div className="text-center">
                <div className="text-5xl mb-4 group-hover:animate-pulse">{asset.symbol}</div>
                <h3 className="text-white text-xl font-bold mb-2">{displayName}</h3>
                <div className="text-white text-2xl font-mono font-bold mb-1">${asset.price.toLocaleString()}</div>
                <div className={`text-lg font-semibold mb-6 ${asset.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {asset.change >= 0 ? '+' : ''}{asset.change}%
                </div>
                {renderBetButton(
                  () => onBetClick(`${key}-wins`, 'yes'),
                  key === 'sp500' ? 'Bet S&P Wins' : `Bet ${displayName} Wins`,
                  `w-full px-6 py-3 border-2 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 ${buttonColor}`
                )}
              </div>
            </div>
          );
        })}
      </div>

      <ActiveBlockCard tier="stacker" progress={blockProgress} showExplosion={showExplosion} />

      {/* Streak Betting Card */}
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="text-4xl animate-pulse">🔥</div>
            <h3 className="text-white text-2xl font-bold">Streak Betting</h3>
          </div>
          
          <p className="text-white text-lg mb-6">Will BTC beat Gold for 3 consecutive blocks?</p>
          
          <div className="grid grid-cols-2 gap-6 mb-6">
            {renderBetButton(
              () => onBetClick('btc-streak', 'yes'),
              'YES (3x Payout)',
              "w-full px-6 py-3 bg-green-600 hover:bg-green-500 border-2 border-green-600 text-white font-bold text-xl rounded-xl transition-all duration-300 transform hover:scale-110 hover:brightness-125"
            )}
            <div className="relative">
              {renderBetButton(
                () => onBetClick('btc-streak', 'no'),
                'NO (1.5x Payout)',
                "w-full px-6 py-3 bg-red-600 hover:bg-red-500 border-2 border-red-600 text-white font-bold text-xl rounded-xl transition-all duration-300 transform hover:scale-110 hover:brightness-125"
              )}
              <button
                onClick={() => onTooltipToggle('streak-payout-tooltip')}
                className="absolute -top-8 -right-2 w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold hover:bg-orange-600 transition-colors shadow-lg z-10"
              >
                ?
              </button>
            </div>
          </div>
          
          <div className="bg-orange-900/30 rounded-lg p-4 border border-orange-500/20">
            <span className="text-orange-400 font-bold text-lg">Current Streak: BTC 2/3 🔥</span>
          </div>
        </div>
      </div>

      {/* Weekly Leaderboard */}
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="text-4xl">🏆</div>
            <h3 className="text-white text-2xl font-bold">Weekly Leaderboard</h3>
          </div>
        </div>
        
        <div className="space-y-3">
          {leaderboardPlayers.map((player) => (
            <div key={player.rank} className="bg-white/5 hover:bg-white/10 rounded-lg p-4 flex items-center justify-between border border-white/10 transition-all duration-200 hover:border-orange-500/30">
              <div className="flex items-center space-x-4">
                <span className="text-2xl">{player.badge}</span>
                <span className="text-white font-bold text-lg">{player.username}</span>
              </div>
              <div className="text-right">
                <div className="text-white font-bold">{player.score.toLocaleString()}</div>
                <div className="text-gray-300 text-sm">{player.streak}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* This Month in Bitcoin History */}
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="text-4xl">📰</div>
            <h3 className="text-white text-2xl font-bold">This Month in Bitcoin History</h3>
          </div>
          <p className="text-gray-300">Latest developments from around the web</p>
        </div>
        
        <div className="space-y-4">
          {bitcoinNewsArticles.map((article, index) => (
            <div key={index} className="bg-white/5 hover:bg-white/10 rounded-lg p-4 border border-white/10 transition-all duration-200 hover:border-orange-500/30">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="text-white font-semibold text-lg leading-tight mb-2 hover:text-orange-400 transition-colors cursor-pointer">
                    {article.title}
                  </h4>
                  <div className="flex items-center space-x-3 text-sm">
                    <span className="text-orange-400 font-medium">{article.source}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-400">{article.timeAgo}</span>
                  </div>
                </div>
                <div className="text-orange-500 ml-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );

  const renderMaxiTier = () => (
    <>
      {/* Hero Section */}
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="text-5xl">📊</div>
            <h2 className="text-white text-4xl font-bold">Macro Market Analysis</h2>
          </div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Advanced predictive models analyzing Bitcoin performance against traditional macro indicators, institutional flows, and global economic sentiment.
          </p>
        </div>
      </div>

      {/* Complex Spread Card */}
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <h3 className="text-white text-2xl font-bold">Complex Spread: BTC vs DXY</h3>
            <button
              onClick={() => onTooltipToggle('dxy-tooltip')}
              className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold hover:bg-orange-600 transition-colors"
            >
              ?
            </button>
          </div>
          <p className="text-gray-300">Will BTC outperform the Dollar Index by greater than 2%?</p>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-6">
          <div className="bg-orange-900/30 rounded-lg p-6 border border-orange-500/20">
            <div className="text-center">
              <div className="text-4xl mb-3">₿</div>
              <h4 className="text-white font-bold text-lg mb-2">Bitcoin</h4>
              <div className="text-white text-2xl font-mono font-bold">$96,420</div>
              <div className="text-green-400 text-lg font-semibold">+2.1%</div>
            </div>
          </div>
          
          <div className="bg-blue-900/30 rounded-lg p-6 border border-blue-500/20">
            <div className="text-center">
              <div className="text-4xl mb-3">💵</div>
              <h4 className="text-white font-bold text-lg mb-2">DXY Index</h4>
              <div className="text-white text-2xl font-mono font-bold">106.45</div>
              <div className="text-red-400 text-lg font-semibold">-0.2%</div>
            </div>
          </div>
        </div>

        <div className="bg-green-900/30 rounded-lg p-4 border border-green-500/20 mb-6">
          <div className="text-center">
            <span className="text-green-400 font-bold text-xl">Current Spread: +2.3% (BTC Winning!)</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {renderBetButton(
            () => onBetClick('btc-vs-dxy', 'yes'),
            'YES (2.8x Payout)',
            "px-8 py-4 bg-green-600 hover:bg-green-500 border-2 border-green-600 text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 hover:brightness-125"
          )}
          {renderBetButton(
            () => onBetClick('btc-vs-dxy', 'no'),
            'NO (1.3x Payout)',
            "px-8 py-4 bg-red-600 hover:bg-red-500 border-2 border-red-600 text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 hover:brightness-125"
          )}
        </div>
      </div>

      <ActiveBlockCard tier="maxi" progress={blockProgress} showExplosion={showExplosion} />

      {/* Credit Risk Analysis Card */}
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="text-4xl">🛡️</div>
            <h3 className="text-white text-2xl font-bold">Credit Risk Analysis</h3>
            <button
              onClick={() => onTooltipToggle('cds-analysis-tooltip')}
              className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold hover:bg-orange-600 transition-colors"
            >
              ?
            </button>
          </div>
          <h4 className="text-gray-300 text-lg max-w-2xl mx-auto">
            Will BTC's block‑return minus the 5‑yr USD IG CDS spread be positive?
          </h4>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-6">
          <div className="bg-orange-900/30 rounded-lg p-6 border border-orange-500/20">
            <div className="text-center">
              <div className="text-4xl mb-3">₿</div>
              <h4 className="text-white font-bold text-lg mb-2">Bitcoin Block Return</h4>
              <div className="text-white text-2xl font-mono font-bold">+2.1%</div>
              <div className="text-gray-300 text-sm">Current block period</div>
            </div>
          </div>
          
          <div className="bg-blue-900/30 rounded-lg p-6 border border-blue-500/20">
            <div className="text-center">
              <div className="text-4xl mb-3">🏦</div>
              <h4 className="text-white font-bold text-lg mb-2">5-Yr USD IG CDS</h4>
              <div className="text-white text-2xl font-mono font-bold">0.75%</div>
              <div className="text-gray-300 text-sm">Credit spread (annualized)</div>
              <button
                onClick={() => onTooltipToggle('cds-spread-tooltip')}
                className="mt-2 w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold hover:bg-orange-600 transition-colors mx-auto"
              >
                ?
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {renderBetButton(
            () => onBetClick('btc-vs-cds', 'yes'),
            'YES (1.6x Payout)',
            "px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 border-2 border-green-600 text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          )}
          {renderBetButton(
            () => onBetClick('btc-vs-cds', 'no'),
            'NO (2.2x Payout)',
            "px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 border-2 border-red-600 text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          )}
        </div>
      </div>

      {/* Risk Metrics Card */}
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="text-4xl">📈</div>
            <h3 className="text-white text-2xl font-bold">Advanced Risk Metrics</h3>
            <button
              onClick={() => onTooltipToggle('risk-metrics-tooltip')}
              className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold hover:bg-orange-600 transition-colors"
            >
              ?
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-900/50 rounded-lg p-4 text-center border border-white/10">
            <h4 className="text-gray-300 text-sm mb-2">Volatility</h4>
            <div className="text-orange-400 text-xl font-mono font-bold">{riskMetrics.volatility}</div>
          </div>
          <div className="bg-gray-900/50 rounded-lg p-4 text-center border border-white/10">
            <h4 className="text-gray-300 text-sm mb-2">Sharpe Ratio</h4>
            <div className="text-green-400 text-xl font-mono font-bold">{riskMetrics.sharpeRatio}</div>
          </div>
          <div className="bg-gray-900/50 rounded-lg p-4 text-center border border-white/10">
            <h4 className="text-gray-300 text-sm mb-2">Max Drawdown</h4>
            <div className="text-red-400 text-xl font-mono font-bold">{riskMetrics.maxDrawdown}</div>
          </div>
          <div className="bg-gray-900/50 rounded-lg p-4 text-center border border-white/10">
            <h4 className="text-gray-300 text-sm mb-2">Correlation</h4>
            <div className="text-blue-400 text-xl font-mono font-bold">{riskMetrics.correlation}</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-900/50 rounded-lg p-4 text-center border border-white/10">
            <h4 className="text-gray-300 text-sm mb-2">VaR (95%)</h4>
            <div className="text-red-400 text-xl font-mono font-bold">{riskMetrics.var95}</div>
          </div>
          <div className="bg-gray-900/50 rounded-lg p-4 text-center border border-white/10">
            <h4 className="text-gray-300 text-sm mb-2">Beta vs S&P</h4>
            <div className="text-purple-400 text-xl font-mono font-bold">{riskMetrics.betaVsSP}</div>
          </div>
          <div className="bg-gray-900/50 rounded-lg p-4 text-center border border-white/10">
            <h4 className="text-gray-300 text-sm mb-2">Sortino Ratio</h4>
            <div className="text-green-400 text-xl font-mono font-bold">{riskMetrics.sortinoRatio}</div>
          </div>
        </div>
      </div>

      {/* Macro Events Calendar */}
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="text-4xl">📅</div>
            <h3 className="text-white text-2xl font-bold">Upcoming Macro Events</h3>
          </div>
          <p className="text-gray-300">High-impact economic events that may affect Bitcoin volatility</p>
        </div>
        
        <div className="space-y-4">
          {macroEvents.map((event, index) => (
            <div key={index} className="bg-white/5 hover:bg-white/10 rounded-lg p-4 border border-white/10 transition-all duration-200 hover:border-orange-500/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-white font-bold text-sm">{event.date}</div>
                    <div className="text-gray-400 text-xs">{event.time}</div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{event.event}</h4>
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-bold border ${
                  event.impact === "High" 
                    ? "bg-red-500/20 text-red-400 border-red-500/30" 
                    : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                }`}>
                  {event.impact.toUpperCase()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <div className="mb-8 space-y-8">
      {currentTier === 'satoshi' && renderSatoshiTier()}
      {currentTier === 'stacker' && renderStackerTier()}
      {currentTier === 'maxi' && renderMaxiTier()}
    </div>
  );
}