import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { TierToggle } from './TierToggle';
import type { ActiveSection, TierType } from '../types';

interface LayoutProps {
  children: ReactNode;
  currentPage: ActiveSection;
  onPageChange: (page: ActiveSection) => void;
  currentTier: TierType;
  onTierChange: (tier: TierType) => void;
  // Wallet connection props
  isConnected: boolean;
  walletAddress: string | null;
  onWalletClick: () => void;
  // DAO specific props
  isLoggedIn: boolean;
  isBtcConnected: boolean;
  btcAddress: string;
  onBtcWalletClick: () => void;
}

export function Layout({
  children,
  currentPage,
  onPageChange,
  currentTier,
  onTierChange,
  isConnected,
  walletAddress,
  onWalletClick,
  isLoggedIn,
  isBtcConnected,
  btcAddress,
  onBtcWalletClick
}: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Header
        currentPage={currentPage}
        onPageChange={onPageChange}
        isConnected={isConnected}
        walletAddress={walletAddress}
        onWalletClick={onWalletClick}
        isLoggedIn={isLoggedIn}
        isBtcConnected={isBtcConnected}
        btcAddress={btcAddress}
        onBtcWalletClick={onBtcWalletClick}
      />
      
      {currentPage === 'Market' && (
        <TierToggle
          currentTier={currentTier}
          onTierChange={onTierChange}
        />
      )}
      
      <main className={`px-6 ${currentPage === 'Market' ? 'pt-52' : 'pt-20'}`}>
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}