import React, { useState, useEffect } from 'react';
import { Layout, MarketPage, Tooltip } from './components';
import { WalletModal } from './components/WalletModal';
import { BettingModal } from './components/BettingModal';
import { DAOPage } from './components/DAOPage';
import { 
  useWalletConnection, 
  useBetting, 
  useDAO, 
  useBlockProgress 
} from './hooks';
import type { ActiveSection, TierType } from './types';

// Add CSS for slider styling
const sliderStyles = `
  .slider-thumb::-webkit-slider-thumb {
    appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: linear-gradient(45deg, #f97316, #eab308);
    cursor: pointer;
    border: 2px solid #ffffff;
    box-shadow: 0 0 10px rgba(249, 115, 22, 0.5);
  }
  
  .slider-thumb::-moz-range-thumb {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: linear-gradient(45deg, #f97316, #eab308);
    cursor: pointer;
    border: 2px solid #ffffff;
    box-shadow: 0 0 10px rgba(249, 115, 22, 0.5);
  }
`;

function App() {
  const [currentPage, setCurrentPage] = useState<ActiveSection>('Market');
  const [currentTier, setCurrentTier] = useState<TierType>('satoshi');
  const [openTooltip, setOpenTooltip] = useState<string | null>(null);
  const [showWalletModal, setShowWalletModal] = useState(false);

  // Inject slider styles
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = sliderStyles;
    document.head.appendChild(styleElement);
    return () => document.head.removeChild(styleElement);
  }, []);

  // Custom hooks
  const { isConnected, walletAddress, connectWallet, disconnectWallet, balance } = useWalletConnection();
  
  const {
    showBettingModal,
    selectedBetType,
    selectedBetSide,
    betAmount,
    betUnit,
    openBettingModal,
    closeBettingModal,
    updateBetAmount,
    updateBetUnit
  } = useBetting();

  const {
    isLoggedIn,
    userPrincipal,
    isBtcConnected,
    btcAddress,
    handleInternetIdentityLogin,
    handleLogout,
    handleBtcWalletClick
  } = useDAO();

  const { blockProgress, showExplosion } = useBlockProgress(currentTier);

  // Handlers
  const handleTierChange = (tier: TierType) => {
    setCurrentTier(tier);
    // Smooth scroll to top for better UX when switching tiers
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWalletClick = () => {
    if (isConnected) {
      disconnectWallet();
    } else {
      setShowWalletModal(true);
    }
  };

  const handleWalletConnect = async (walletType: string, address: string) => {
    await connectWallet(address, walletType);
    setShowWalletModal(false);
  };

  const handleBetClick = (betType: string, betSide: string) => {
    if (!isConnected) {
      setShowWalletModal(true);
      return;
    }
    openBettingModal(betType, betSide);
  };

  const handleTooltipToggle = (tooltipId: string) => {
    setOpenTooltip(openTooltip === tooltipId ? null : tooltipId);
  };

  return (
    <>
      <Layout
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        currentTier={currentTier}
        onTierChange={handleTierChange}
        isConnected={isConnected}
        walletAddress={walletAddress}
        onWalletClick={handleWalletClick}
        isLoggedIn={isLoggedIn}
        isBtcConnected={isBtcConnected}
        btcAddress={btcAddress}
        onBtcWalletClick={handleBtcWalletClick}
      >
        {currentPage === 'Market' && (
          <MarketPage
            currentTier={currentTier}
            blockProgress={blockProgress}
            showExplosion={showExplosion}
            onBetClick={handleBetClick}
            onTooltipToggle={handleTooltipToggle}
            isConnected={isConnected}
          />
        )}
        
        {currentPage === 'DAO' && (
          <DAOPage
            isLoggedIn={isLoggedIn}
            userPrincipal={userPrincipal}
            onInternetIdentityLogin={handleInternetIdentityLogin}
            onLogout={handleLogout}
          />
        )}
      </Layout>

      {showBettingModal && (
        <BettingModal
          isVisible={showBettingModal}
          onClose={closeBettingModal}
          selectedBetType={selectedBetType}
          selectedBetSide={selectedBetSide}
          betAmount={betAmount}
          betUnit={betUnit}
          walletAddress={walletAddress}
          balance={balance}
          onBetAmountChange={updateBetAmount}
          onBetUnitChange={updateBetUnit}
        />
      )}

      {showWalletModal && (
        <WalletModal
          onClose={() => setShowWalletModal(false)}
          onConnect={handleWalletConnect}
        />
      )}

      {openTooltip && (
        <Tooltip
          id={openTooltip}
          onClose={() => setOpenTooltip(null)}
        />
      )}
    </>
  );
}

export default App;