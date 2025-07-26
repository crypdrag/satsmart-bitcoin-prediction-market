import React, { useState } from 'react';
import type { TierType } from '../types';

interface ActiveBlockCardProps {
  tier: TierType;
  progress: number;
  showExplosion: boolean;
}

export function ActiveBlockCard({ tier, progress, showExplosion }: ActiveBlockCardProps) {
  const [stars] = useState(() => 
    Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
      duration: Math.random() * 2.5 + 1.5
    }))
  );

  const rocketPosition = (progress / 100) * 80 + 10;
  const isComplete = progress === 100;

  const renderAnimation = () => {
    if (tier === 'satoshi') {
      return (
        <div className="relative h-60 bg-gradient-to-b from-blue-300 via-blue-500 to-blue-900 overflow-hidden">
          <div className="absolute top-4 right-4 flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-400 text-xs">Live</span>
          </div>

          {stars.map((star) => (
            <div
              key={star.id}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${star.left}%`,
                top: `${star.top}%`,
                animationDelay: `${star.delay}s`,
                animationDuration: `${star.duration}s`
              }}
            />
          ))}

          {!showExplosion && (
            <div className="absolute left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out"
                 style={{ bottom: `${rocketPosition * 0.8}%` }}>
              <div className="text-3xl mb-2">🚀</div>
              <div className="flex flex-col items-center space-y-1">
                <div className="w-3 h-6 bg-gradient-to-t from-orange-500 to-yellow-400 rounded-full opacity-80 animate-pulse"></div>
                <div className="w-2 h-4 bg-gradient-to-t from-orange-400 to-yellow-300 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          )}

          {showExplosion && (
            <div className="absolute left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out"
                 style={{ bottom: `${rocketPosition * 0.8}%` }}>
              <div className="text-6xl animate-pulse">💥</div>
              {Array.from({ length: 8 }, (_, i) => (
                <div
                  key={i}
                  className="absolute text-2xl animate-bounce"
                  style={{
                    left: `${Math.cos((i * 45 * Math.PI) / 180) * 60}px`,
                    top: `${Math.sin((i * 45 * Math.PI) / 180) * 60}px`,
                    animationDelay: `${i * 0.05}s`,
                    animationDuration: '1s'
                  }}
                >
                  🪙
                </div>
              ))}
            </div>
          )}
        </div>
      );
    } else if (tier === 'stacker') {
      return (
        <div className="relative h-60 bg-gradient-to-b from-blue-300 via-blue-500 to-blue-900 overflow-hidden p-8">
          <div className="flex items-center justify-center space-x-4 h-full">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center opacity-60 border border-green-500">
                <span className="text-white text-lg">✓</span>
              </div>
              <span className="text-white text-xs mt-2 opacity-60">873243</span>
            </div>
            <div className="w-8 h-0.5 bg-gray-500"></div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center opacity-80 border border-green-500">
                <span className="text-white text-lg">✓</span>
              </div>
              <span className="text-white text-xs mt-2 opacity-80">873244</span>
            </div>
            <div className="w-8 h-0.5 bg-orange-500 animate-pulse"></div>
            <div className="flex flex-col items-center relative">
              <div className="w-24 h-24 bg-gray-800 rounded-lg border-2 border-orange-500 relative overflow-hidden">
                <div 
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-orange-500 to-yellow-500 transition-all duration-1000"
                  style={{ height: `${progress}%` }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-yellow-400 animate-pulse">✨</div>
                  <div className="text-orange-400 animate-pulse ml-1" style={{ animationDelay: '0.5s' }}>⚡</div>
                </div>
              </div>
              <span className="text-white text-xs mt-2 font-bold">873245</span>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="relative h-60 bg-gradient-to-b from-gray-800 to-gray-900 overflow-hidden p-8">
          <div className="flex items-center justify-center space-x-6 h-full font-mono">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-800 rounded-lg border-2 border-orange-500 relative overflow-hidden">
                <div 
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-orange-500 to-yellow-500 transition-all duration-1000"
                  style={{ height: `${progress}%` }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-xs font-mono">{Math.round(progress)}%</span>
                </div>
              </div>
              <span className="text-white text-sm mt-3 font-mono">ACTIVE</span>
              <span className="text-gray-400 text-xs font-mono">#873245</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-600 rounded-lg border border-green-500 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-white text-lg">✓</div>
                  <div className="text-white text-xs font-mono">100%</div>
                </div>
              </div>
              <span className="text-white text-sm mt-3 font-mono">LATEST</span>
              <span className="text-gray-400 text-xs font-mono">#873244</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-600 rounded-lg border border-gray-500 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-white text-lg">✓</div>
                  <div className="text-white text-xs font-mono">100%</div>
                </div>
              </div>
              <span className="text-white text-sm mt-3 font-mono">PREVIOUS</span>
              <span className="text-gray-400 text-xs font-mono">#873243</span>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
      <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-6 text-center">
        <h2 className="text-white text-2xl font-bold mb-2">Active Bitcoin Block: #873245</h2>
        <p className="text-white/80 text-sm mb-1">Live from Bitcoin mainnet</p>
        <div className="flex items-center justify-center space-x-2">
          <span className="text-green-300 text-lg">✓</span>
          <span className="text-green-300 text-sm font-medium">Live data verified</span>
        </div>
      </div>

      {renderAnimation()}

      <div className="bg-gray-900/90 backdrop-blur-sm border-t border-white/20 p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-orange-400 font-medium">Mining Progress</span>
          <span className="text-orange-400 font-bold">{Math.round(progress)}%</span>
        </div>
        
        <div className="relative w-full h-3 bg-gray-800 rounded-full overflow-hidden mb-4">
          <div 
            className="h-full bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 rounded-full transition-all duration-1000 ease-out relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
          </div>
        </div>
        
        <div className="text-center">
          <span className="text-gray-300 text-sm">
            {isComplete ? "Block complete! 🎉" : "Mining in progress..."}
          </span>
        </div>
      </div>
    </div>
  );
}